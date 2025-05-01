// 模式状态常量
const MODES = {
    DAY: 'day',
    NIGHT: 'night'
};

// DOM元素配置
const ELEMENT_GROUPS = {
    TEXT_ELEMENTS: [
        { prefix: 'nav', range: 10 },
        { prefix: 'm', range: 10 },
        { prefix: 'title', range: 10 },
        { prefix: 'thinking', range: 10 },
        { prefix: 'writedate', range: 10 },
        { prefix: 'directory', range: 1 }
    ],
    ASSETS: {
        background: { day: 'url(images/bk1.jpg)', night: 'url(images/bk2.jpg)' },
        logo: { day: 'images/logohalfblack.png', night: 'images/logohalfwhite.png' }
    }
};

// 样式配置
const THEME_COLORS = {
    [MODES.DAY]: 'rgba(0,0,0,.62)',
    [MODES.NIGHT]: 'rgba(255,255,255,.62)'
};

let currentMode = MODES.DAY;

/* 初始化 */
function initialize() {
    const date = new Date();
    const hour = date.getHours();
    
    // 简化时间判断逻辑
    const isNightTime = hour >= 18 || hour < 6;
    setTheme(isNightTime ? MODES.NIGHT : MODES.DAY);
}

/* 主题切换入口 */
function changeTheme() {
    setTheme(currentMode === MODES.DAY ? MODES.NIGHT : MODES.DAY);
}

/* 核心主题设置方法 */
function setTheme(mode) {
    // 更新文本颜色
    ELEMENT_GROUPS.TEXT_ELEMENTS.forEach(({ prefix, range }) => {
        for (let i = 1; i <= range; i++) {
            const element = document.getElementById(`${prefix}${i}`);
            safeStyleUpdate(element, 'color', THEME_COLORS[mode]);
        }
    });

    // 更新资源
    const assets = ELEMENT_GROUPS.ASSETS;
    safeStyleUpdate(document.getElementById('background'), 'backgroundImage', assets.background[mode]);
    safeAttributeUpdate(document.getElementById('logo'), 'src', assets.logo[mode]);

    currentMode = mode;
}

/* 安全DOM操作辅助方法 */
function safeStyleUpdate(element, property, value) {
    if (element && element.style) {
        element.style[property] = value;
    }
}

function safeAttributeUpdate(element, attribute, value) {
    if (element) {
        element.setAttribute(attribute, value);
    }
}

// 初始化主题
initialize();
