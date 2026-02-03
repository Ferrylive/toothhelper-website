/* ==========================================
   Tailwind CSS 配置
   ========================================== */

tailwind.config = {
    darkMode: 'media', // 使用系统偏好设置自动切换
    theme: {
        extend: {
            // 字体配置
            fontFamily: {
                sans: ['Inter', 'sans-serif'],        // 正文字体
                heading: ['Outfit', 'sans-serif'],    // 标题字体
            },
            // 自定义颜色
            colors: {
                'med-base': 'rgb(229, 244, 235)', // 浅薄荷基底
                'tech-cyan': '#7FECD8',           // 科技青
                'tech-cyan-dark': '#5EcCb8',      // 深青 hover
                'deep-teal': '#0f3e3e',           // 深色文字
                'surface-white': 'rgba(255, 255, 255, 0.85)',
                // 黑暗模式颜色
                'dark-bg': '#0a1f1f',             // 深色背景
                'dark-surface': '#1a3333',        // 深色表面
                'dark-text': '#e0f2f1',           // 浅色文字
            },
            // 渐变背景
            backgroundImage: {
                'tech-gradient': 'linear-gradient(135deg, #7FECD8 0%, #2dd4bf 100%)',
                'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)',
            },
            // 阴影效果
            boxShadow: {
                'glow': '0 0 25px -5px rgba(127, 236, 216, 0.6)',
                'card': '0 10px 30px -10px rgba(15, 62, 62, 0.1)',
                'card-hover': '0 20px 40px -10px rgba(127, 236, 216, 0.4)',
            },
            // 动画定义
            animation: {
                'scan-sweep': 'scanSweep 3s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite alternate',
                'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
                'spin-slow': 'spin 15s linear infinite',
            },
            // 关键帧动画
            keyframes: {
                scanSweep: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '0% 200%' },
                },
                float: {
                    '0%': { transform: 'translateY(0px)' },
                    '100%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
                    '50%': { opacity: 1, transform: 'scale(1.05)' },
                }
            }
        }
    }
};
