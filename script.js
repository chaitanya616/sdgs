document.addEventListener('DOMContentLoaded', () => {
    // Mission Button Interaction
    const missionBtn = document.getElementById('missionBtn');
    missionBtn.addEventListener('click', () => {
        alert('WildWave AI: Using AI to protect endangered species on land and sea!');
    });

    // Fact Card Flip Interaction
    const factCards = document.querySelectorAll('.fact-card');
    factCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Counter Animation
    const counters = [
        { id: 'animalCounter', target: 10000, duration: 2000 },
        { id: 'oceanCounter', target: 50000, duration: 2000 },
        { id: 'habitatCounter', target: 250000, duration: 2000 }
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        let start = 0;
        const increment = counter.target / (counter.duration / 16);
        const updateCounter = () => {
            start += increment;
            if (start >= counter.target) {
                element.textContent = Math.floor(counter.target).toLocaleString();
                return;
            }
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        };
        updateCounter();
    });

    // Join Form Interaction
    const joinType = document.getElementById('joinType');
    const offlineForm = document.getElementById('offlineForm');
    const joinBtn = document.getElementById('joinBtn');
    const addressInput = document.getElementById('address');

    joinType.addEventListener('change', () => {
        if (joinType.value === 'offline') {
            offlineForm.classList.remove('hidden');
        } else {
            offlineForm.classList.add('hidden');
            addressInput.value = '';
        }
    });

    joinBtn.addEventListener('click', () => {
        const choice = joinType.value;
        if (choice === 'online') {
            alert('Joining online! Redirecting to WWF conservation group...');
            window.location.assign('https://www.worldwildlife.org/');
        } else if (choice === 'offline') {
            const address = addressInput.value.trim();
            if (!address) {
                alert('Please enter your address!');
                return;
            }
            alert(`Thank you for joining offline! Based on your address "${address}", check out local groups like WWF or Greenpeace in your area!`);
            addressInput.value = '';
        } else {
            alert('Please choose how you want to join!');
        }
        joinType.value = '';
        offlineForm.classList.add('hidden');
    });
});
