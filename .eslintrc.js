module.exports = {
  root: true,
  //코드 검사 범위
  env: {
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  //코드 검사 규칙
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
  plugins: ['vue'],
  //코드 규칙 작성
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'Dashboard',
          'Login',
          'Header',
          'Footer',
          'Member',
          'Customcd',
          'Company',
          'Singularity',
          'Production',
          'Mold',
          'Maintenance',
          'Disposal',
          'Terminal',
          'Preset',
          'Counter',
          'Comprehensive',
          'Approval',
          'Signup',
        ],
      },
    ],
  },
};
