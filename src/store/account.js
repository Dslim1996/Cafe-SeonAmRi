import AES from 'crypto-js/aes';
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

import AuthApi from '@/apis/auth';
import { SETTINGS } from '@/config/index';
import i18n from '@/i18n';

export const useUserStore = defineStore('account', {
  id: 'user',
  state: () => ({
    user: localStorage.getItem(SETTINGS.USER_TOKEN_NM) || null,
    accessToken: localStorage.getItem(SETTINGS.TOKEN_NM) || '',
    refreshToken: localStorage.getItem(SETTINGS.RE_TOKEN_NM) || '',
    newUser: null,
    tempToken: '',
  }),
  getters: {
    signedInUser: state => state.user,
    isAuthenticated: state => !!state.accessToken,
    signedToken: state => state.accessToken,
    newSignedInUser: state => state.newUser,
    getTempToken: state => state.tempToken,
  },
  actions: {
    login(userData) {
      return new Promise((resolve, reject) => {
        AuthApi.signin(userData)
          .then(res => {
            if (res.data) {
              console.log(res.data);
              if (
                res.data.user.userState === 'R' &&
                !res.data.user.approvedAt
              ) {
                this.storeNewUser(res.data);
                resolve(res.data);
              } else if (
                res.data.user.userState === 'T' &&
                !res.data.user.updatedAt
              ) {
                reject('T');
              } else if (res.data.user.userState === 'E') {
                reject('E');
              } else {
                if (userData.rememberMe) {
                  localStorage.setItem(
                    'FORM_USER',
                    AES.encrypt(
                      JSON.stringify(userData),
                      import.meta.env.VITE_APP_FB_AK,
                    ).toString(),
                  );
                } else {
                  localStorage.removeItem('FORM_USER');
                }
                this.storeUser(res.data);
                resolve(res.data);
              }
            } else {
              throw Error({
                data: i18n.global.t('not.exist.x', [i18n.global.t('user')]),
              });
            }
          })
          .catch(err => {
            console.log(err);
            let msg = i18n.global.t('plz.chk.id.pw');
            if (err.data && err.data.message) {
              msg += `<p style="color: red">(${err.data.message})</p>`;
            }
            reject(msg);
          });
      });
    },
    logout() {
      return new Promise(resolve => {
        AuthApi.signout();
        this.clearUser();
        resolve();
      });
    },
    refresh() {
      return new Promise((resolve, reject) => {
        const userData = {
          refreshToken: localStorage.getItem(SETTINGS.RE_TOKEN_NM),
        };
        AuthApi.refresh(userData)
          .then(res => {
            if (res.data) {
              this.refreshUser(res.data);
              resolve(res.data);
            } else {
              throw Error({
                data: i18n.global.t('not.exist.x', [i18n.global.t('user')]),
              });
            }
          })
          .catch(err => reject(err));
      });
    },
    remoteLogin(userData) {
      return new Promise(resolve => {
        AuthApi.remoteSignIn(userData.id, userData.remoteId)
          .then(res => {
            if (res.data) {
              if (res.data.user.userState === 'R' && !res.data.user.updatedAt) {
                throw Error({
                  data:
                    i18n.global.t('not.approved') + ' ' + i18n.global.t('user'),
                });
              }
              this.storeUser(res.data);
              resolve(res.data);
            } else {
              throw Error({
                data: i18n.global.t('not.exist.x', [i18n.global.t('user')]),
              });
            }
          })
          .catch(err => {
            let msg = '';
            if (err.data) {
              msg += `<p style="color: red">(${err.data})</p>`;
            }
            Swal.fire({
              icon: 'error',
              title: i18n.global.t('failed.to.title', [i18n.global.t('login')]),
              html: msg,
            });
          });
      });
    },
    storeUser(data) {
      localStorage.setItem(SETTINGS.USER_TOKEN_NM, JSON.stringify(data.user));
      localStorage.setItem(SETTINGS.TOKEN_NM, data.accessToken);
      localStorage.setItem(SETTINGS.RE_TOKEN_NM, data.refreshToken);
      this.user = data.user;
      this.accessToken = data.accessToken;
      this.refreshToken = data.refreshToken;
    },
    clearUser() {
      localStorage.removeItem(SETTINGS.USER_TOKEN_NM);
      localStorage.removeItem(SETTINGS.TOKEN_NM);
      localStorage.removeItem(SETTINGS.RE_TOKEN_NM);
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
    },
    refreshUser(data) {
      localStorage.setItem(SETTINGS.TOKEN_NM, data.accessToken);
      localStorage.setItem(SETTINGS.RE_TOKEN_NM, data.refreshToken);
      this.accessToken = data.accessToken;
      this.refreshToken = data.refreshToken;
    },
    storeNewUser(data) {
      this.newUser = data.user;
      this.tempToken = String(data.accessToken);
    },
    clearNewUer() {
      this.newUser = null;
      this.tempToken = null;
    },
  },
});
