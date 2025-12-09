// Simple JavaScript untuk fungsi dasar
document.addEventListener('DOMContentLoaded', function() {
    console.log('PetHome Website Loaded');
    
    // Adopt button functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('adopt-btn')) {
            const petCard = e.target.closest('.pet-card');
            const petName = petCard.querySelector('.pet-name').textContent;
            showAdoptionModal(petName);
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
});

// Show adoption modal
function showAdoptionModal(petName) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Adopsi ${petName}</h2>
            <p>Terima kasih minat mengadopsi <strong>${petName}</strong>!</p>
            <p>Tim kami akan menghubungi Anda dalam 24 jam untuk proses selanjutnya.</p>
            <form class="adoption-form">
                <input type="text" placeholder="Nama Lengkap" required>
                <input type="email" placeholder="Email" required>
                <input type="tel" placeholder="Nomor Telepon" required>
                <textarea placeholder="Ceritakan tentang rumah dan keluarga Anda..." rows="4" required></textarea>
                <button type="submit">Kirim Formulir</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Close modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    // Form submission
    const form = modal.querySelector('.adoption-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert(`Formulir untuk ${petName} berhasil dikirim! Tim kami akan menghubungi Anda.`);
        document.body.removeChild(modal);
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}