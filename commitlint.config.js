module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => message.startsWith('Release')],
}
