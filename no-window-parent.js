// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    create(context) {
        return {
            MemberExpression: function (node) {
                if (node.object && node.object.type === "MemberExpression" &&
                    node.object.object && node.object.object.type === "Identifier" && node.object.object.name.match(/window$/i) &&
                    node.object.property && node.object.property.type === "Identifier" && node.object.property.name === "parent")
                    context.report({
                        node,
                        message: "Wrap in /// #if !FILTERED && !DEMO if it's just for dev to avoid errors on CDN enabled env.",
                    });
            },
            TSAsExpression: function (node) {
                if (node.expression && node.expression.type === "MemberExpression" &&
                    node.expression.object && node.expression.object.type === "Identifier" && node.expression.object.name.match(/window$/i) &&
                    node.expression.property && node.expression.property.type === "Identifier" && node.expression.property.name === "parent")
                    context.report({
                        node,
                        message: "Wrap in /// #if !FILTERED && !DEMO if it's just for dev to avoid errors on CDN enabled env.",
                    });
            },
        };
    },
};