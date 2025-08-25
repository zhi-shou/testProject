// 设置轮播图高度
function setCarouselHeight() {
    const carousel = document.getElementById('template-mo-zay-hero-carousel');
    if (carousel) {
        const bodyWidth = document.body.clientWidth;
        carousel.style.height = `${bodyWidth * 0.322}px`;
    }
}

// 页面加载完成后设置高度
document.addEventListener('DOMContentLoaded', setCarouselHeight);

// 监听窗口大小变化
window.addEventListener('resize', setCarouselHeight);
