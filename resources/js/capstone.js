function capstone() {
    document.querySelectorAll('.layer').forEach(layer => {
        layer.classList.remove('active');
    });
    document.querySelector('.layer-capstone').classList.add('active');
}
