document.querySelectorAll('.pricing-plan').forEach(plan => {
    plan.addEventListener('mouseover', () => {
        plan.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
    });
    plan.addEventListener('mouseout', () => {
        plan.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});
