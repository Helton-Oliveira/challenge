let totalSeconds = 15;
// @ts-ignore
export const countdown = (event) => {
    // @ts-ignore
    const timer = setInterval(() => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        // @ts-ignore
        event("regressiveTime", { minutes, seconds });

        if (totalSeconds === 0) {
            clearInterval(timer);
            console.log("Contagem regressiva terminada");
        } else {  
            totalSeconds -= 1;
        }
    }, 1000);
};
