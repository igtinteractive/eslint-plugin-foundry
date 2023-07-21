// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    create(context) {
        return {
            ImportDeclaration: function (node) {
                if (typeof node.source.value === "string" && node.source.value.match(/^playa-.*\/dist\//))
                    context.report({
                        node,
                        message: "Have library maintainer export class instead of importing from dist folder.",
                    });
            }
        };
    },
};