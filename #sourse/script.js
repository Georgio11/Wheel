let wheel = document.querySelector('.wheel');
let spinButtons = document.querySelectorAll('.start_btn');
let frame = document.querySelector('.wheel_frame');
let spin = document.querySelector('.spin_count');
let board = document.querySelector('.board');
let modal = document.querySelector('.modal');
let registration = document.querySelector('.registration');
let spotty = document.querySelector('.spotty');
let countText = document.querySelector('.pointer_text');
let text = document.querySelector('.text');
let ground = document.querySelector('.ground');
let leftMountain = document.querySelector('.left_mountain');
let rightMountain = document.querySelector('.right_mountain');
let wheelContainer = document.querySelector('.wheel_container');
let logo = document.querySelector('.logo');
let pointer = document.querySelector('.pointer');
let wheelBtn = document.querySelector('.wheel_btn');
let pointerText = document.querySelector('.pointer_text');
let spinCount = 2;

function promiseAfterTimeout(seconds) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), seconds * 1000);
    });
};

function rotateWheel(degr) {
    wheel.style.transform = 'rotate(' + degr + 'deg)';
    return promiseAfterTimeout(4);
};

function launchSpin(degrees) {
    currentRotation += degrees;
    return rotateWheel(currentRotation);
};

let spinState = {
    clickedOnce: false,
    count: 0
};

let currentRotation = 0;

let isAnimating = false;

function setButtonsState(disabled, cursorStyle) {
    spinButtons.forEach(btn => {
        btn.disabled = disabled;
        btn.style.cursor = cursorStyle;
    });
};

spinButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        if (!isAnimating && spinState.count < 2) {
            isAnimating = true;
            setButtonsState(true, 'default');
            

            if (!spinState.clickedOnce) {
                launchSpin(2998).then(() => {
                    spinState.clickedOnce = true;
                    spinState.count++;
                    setButtonsState(false, 'pointer');
                    isAnimating = false;
                    board.classList.remove('active');
                    pointer.classList.remove('active');
                    pointerText.classList.remove('active');
                });
            } else {
                modal.classList.add('active');
                launchSpin(2942).then(() => {
                    spinState.count++;
                    setButtonsState(false, 'default');
                    isAnimating = false;
                    board.classList.remove('active');
                    pointer.classList.remove('active');
                    pointerText.classList.remove('active');
                    setInterval(()=> {
                        modal.classList.add('opacity');
                        registration.classList.add('active');
                    }, 800)
                });
            };

            spinCount--;
            spin.innerHTML = spinCount;
            board.classList.add('active');
            pointer.classList.add('active');
            pointerText.classList.add('active');
        }
    });
});

function wheelSize() {
    let frameHeight = frame.offsetHeight;
    let frameWidth = frame.offsetWidth;
    let wheelHeight = frameHeight * 0.735;
    let wheelWidth = frameWidth * 0.55;
    wheel.style.height = `${wheelHeight}px`;
    wheel.style.width = `${wheelWidth}px`;
};

wheelSize();
window.addEventListener('resize', wheelSize);

function adaptationElements() {
    if(window.innerWidth/window.innerHeight > 1 && window.innerWidth/window.innerHeight < 1.5) {
        spotty.style.bottom = '6%';
        spotty.style.left = '2%';
        board.style.bottom = '40%';
        countText.style.bottom = '38%';
        text.style.width = '15%';
        spotty.classList.remove('modificate');
        board.classList.remove('modificate');
        countText.classList.remove('modificate');
        text.classList.remove('modificate');
        ground.classList.remove('modificate');
        leftMountain.classList.remove('modificate');
        rightMountain.classList.remove('modificate');
        wheelContainer.classList.remove('modificate');
        logo.classList.remove('modificate');
        pointer.classList.remove('modificate');
        pointerText.classList.remove('modificate');
        wheelBtn.classList.remove('modificate');
        registration.classList.remove('modificate');
        pointer.classList.remove('start_btn');
    } else if(window.innerWidth/window.innerHeight >= 1.5 && window.innerWidth/window.innerHeight <= 1.6) {
        spotty.style.bottom = '9%';
        spotty.style.left = '2%';
        board.style.bottom = '46%';
        countText.style.bottom = '';
        text.style.width = '15%';
        spotty.classList.remove('modificate');
        board.classList.remove('modificate');
        countText.classList.remove('modificate');
        text.classList.remove('modificate');
        ground.classList.remove('modificate');
        leftMountain.classList.remove('modificate');
        rightMountain.classList.remove('modificate');
        wheelContainer.classList.remove('modificate');
        logo.classList.remove('modificate');
        pointer.classList.remove('modificate');
        pointerText.classList.remove('modificate');
        wheelBtn.classList.remove('modificate');
        registration.classList.remove('modificate');
        pointer.classList.remove('start_btn');
    } else if(window.innerWidth/window.innerHeight < 1) {
        spotty.classList.add('modificate');
        board.classList.add('modificate');
        countText.classList.add('modificate');
        text.classList.add('modificate');
        ground.classList.add('modificate');
        leftMountain.classList.add('modificate');
        rightMountain.classList.add('modificate');
        wheelContainer.classList.add('modificate');
        logo.classList.add('modificate');
        pointer.classList.add('modificate');
        pointer.classList.add('start_btn');
        pointerText.classList.add('modificate');
        wheelBtn.classList.add('modificate');
        registration.classList.add('modificate');
    } else {
        spotty.style.bottom = '';
        spotty.style.left = '';
        board.style.bottom = '';
        countText.style.bottom = '';
        text.style.width = '';
        spotty.classList.remove('modificate');
        board.classList.remove('modificate');
        countText.classList.remove('modificate');
        text.classList.remove('modificate');
        ground.classList.remove('modificate');
        leftMountain.classList.remove('modificate');
        rightMountain.classList.remove('modificate');
        wheelContainer.classList.remove('modificate');
        logo.classList.remove('modificate');
        pointer.classList.remove('modificate');
        pointerText.classList.remove('modificate');
        wheelBtn.classList.remove('modificate');
        registration.classList.remove('modificate');
        pointer.classList.remove('start_btn');
    }
};


adaptationElements();

window.addEventListener('resize', adaptationElements);