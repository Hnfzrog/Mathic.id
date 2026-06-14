// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isExpanded ? 'none' : 'block';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// Select Grade from Program Card
function selectGrade(grade) {
    const select = document.getElementById('kelas');
    
    // Find the option that starts with the selected grade
    for(let i = 0; i < select.options.length; i++) {
        if(select.options[i].value.startsWith(grade)) {
            select.selectedIndex = i;
            break;
        }
    }
}

// Form Submission Logic
const form = document.getElementById('bookingForm');
const targetPhone = "6281517334524"; // Replaced with user's specific number

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous errors
    document.getElementById('namaError').classList.remove('show');
    document.getElementById('kelasError').classList.remove('show');
    document.getElementById('nama').classList.remove('error');
    document.getElementById('kelas').classList.remove('error');
    
    // Get values
    const nama = document.getElementById('nama').value.trim();
    const kelas = document.getElementById('kelas').value;
    const materi = document.getElementById('materi').value.trim() || '-';
    
    let isValid = true;
    
    // Validate Nama
    if(!nama) {
        document.getElementById('namaError').classList.add('show');
        document.getElementById('nama').classList.add('error');
        isValid = false;
    }
    
    // Validate Kelas
    if(!kelas) {
        document.getElementById('kelasError').classList.add('show');
        document.getElementById('kelas').classList.add('error');
        isValid = false;
    }
    
    if(isValid) {
        // Construct WhatsApp Message
        const message = `Halo mathic.id! 👋
Perkenalkan, saya ${nama}, kelas ${kelas}.
Saya tertarik mendaftar les matematika private.
Materi yang ingin dipelajari: ${materi}.
Mohon info lebih lanjut. Terima kasih! 🙏`;

        // Encode URI Component
        const encodedMessage = encodeURIComponent(message);
        
        // WhatsApp API URL
        const waUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodedMessage}`;
        
        // Open in new tab
        window.open(waUrl, '_blank');
        
        // Optional: Reset form after successful generation
        form.reset();
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
