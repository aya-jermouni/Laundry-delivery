module.exports = {
    parser:  '@babel/eslint-parser',
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'react-hooks'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      "react/react-in-jsx-scope": "off"
      // Add other rules as needed
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  
    }
  
  