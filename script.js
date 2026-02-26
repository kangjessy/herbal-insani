document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navContent = document.querySelector('.nav-content');
    
    if (mobileToggle && navContent) {
        mobileToggle.addEventListener('click', () => {
            navContent.classList.toggle('menu-open');
            // Toggle icon from hamburger to X
            const icon = mobileToggle.querySelector('i');
            if(navContent.classList.contains('menu-open')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });
    }

    // UI Tab Navigation Logic (Khusus Halaman Paket)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Hapus state aktif dari semua tombol dan panel
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanels.forEach(p => p.classList.remove('active'));

                // Set state aktif pada tombol yang diklik dan panel targetnya
                btn.classList.add('active');
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
    }
});
