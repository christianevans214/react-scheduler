module.exports = {
    "extends": "airbnb",
    "plugins": ["jest"],
    "env": {
      "jest/globals": true
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "function-paren-newline": [0],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
};
