const lightbulb = () => {
    let lightbulb = document.createElement("span");
    return lightbulb;
};
const colorsArray = () => {
    let lightbulbArray = [];
    let colors = ['red', 'blue', 'yellow'];
    for (let i = 0; i < Length_garland; i++) {
        let color;
        while (lightbulbArray[i-1] === color || color === undefined) {
            color = colors[Math.floor(Math.random() * colors.length)];
        }
        lightbulbArray[i] = color;
    }

    document.querySelectorAll('#garland span').forEach( (elem, i) => elem.className = lightbulbArray[i]);
};
const clickButton = () => {
    count++;
    if (count === 1)  {
        workLightbulb =
            setInterval(() => {
                colorsArray();
            }, 1000);
    } else {
        clearInterval(workLightbulb);
        count = 0;
    }
};

let garland = document.getElementById("garland");
let Length_garland = Math.floor(Math.random() * 100);
let count = 0;
let workLightbulb;

for (let i = 0; i < Length_garland; i++) {
    garland.appendChild(lightbulb());
}