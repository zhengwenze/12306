module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9000',
                changeOrigin: true,
                ws: true
            }
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: (error) => {
                    const ignoreErrors = [
                        "ResizeObserver loop limit exceeded",
                        "ResizeObserver loop completed with undelivered notifications"
                    ];
                    if (ignoreErrors.some(e => error.message.includes(e))) {
                        return false;
                    }
                    return true;
                },
            },
        },
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'border-radius-base': '4px',
                    'card-radius': '4px'
                }
            }
        }
    }
}
