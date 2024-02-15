document.getElementById("startRecording").addEventListener("click", initFunction);
document.getElementById("newFactB").addEventListener("click", newFact);

var facts = [
 [`"— Так багато на світі горя, <br>люди, будьте взаємно красивими!" <br> Ліна Костенко`,
`The author Lina Kostenko encourages people to be mutually respectful as there is already too much grief in this world`, 
`— Tak bahato na sviti horia, <br>liudy, budte vzaiemno krasyvymy!`], 
 [`Кожне слово пахне, <br>Мов листочок м’яти. <br> Дмитро Павличко`,`The author Dmytro Pavlychko compares the smell of the word to the one of the mint leaf`,`Kozhne slovo pakhne, <br>Mov lystochok miaty.`], 
 [`Кожне слово світить <br>Гранями рубіна, <br>Але сяє, наче сонце, <br>Слово Україна. <br> Дмитро Павличко`,`The author Dmytro Pavlychko states that every word shines like a ruby bit the work Ukraine whines like the sun`,`Kozhne slovo svityt <br>Hraniamy rubina, <br>Ale siaie, nache sontse, <br>Slovo Ukraina.`], 
 [`Візьми лише найважливіше. Візьми листи. <br>Візьми лише те, що зможеш сама нести. <br> Сергій Жадан`,
`The author Serhii Zhadan encourages to take only the most important stuff, the letters for example, but only what one carry on their own`,`Vizmy lyshe naivazhlyvishe. Vizmy lysty. <br>Vizmy lyshe te, shcho zmozhesh sama nesty.`], 
 [`Нам з тобою бігти вздовж соняшникових полів. <br> Сергій Жадан`,`The author Serhii Zhadan says there will be time to run along the sunflower fields`,`Nam z toboiu bihty vzdovzh soniashnykovykh poliv.`], 
 [`"секунди не мають виміру – <br>це тільки удари серця
" <br> Юрій Іздрик`,
`The author Yurii Izdryk says that seconds do not have measurement other than heart beats`,`sekundy ne maiut vymiru –<br>tse tilky udary sertsia`], 
 [`у слова немає запаху <br>а є тільки колір і смак <br>ти можеш мені сказати <br>чому це насправді так? <br> Юрій Іздрик`,`The author Yurii Izdryk states that words don't possess a smell but color and taste instead. The author questions whether it is really true.`,`u slova nemaie zapakhu<br>a ye tilky kolir i smak<br>ty mozhesh meni skazaty<br>chomu tse naspravdi tak?`], 
 [`"секунди не мають вибору<br>секунди – вони минають 
" <br> Юрій Іздрик`,
`The author Yurii Izdryk says that seconds do not have a choice, they just pass`,`sekundy ne maiut vyboru<br>sekundy – vony mynaiut`], 
 [`"ми й в сутінках світу<br>де поспіхом навхрест прострочено мить<br>знайдемо свою павутинку зі світла
" <br> Юрій Іздрик`,
`The author Yurii Izdryk believes that in the twilight of the world where the moment is briefly cross-stiched, people will find a web of light`,`my y v sutinkakh svitu<br>de pospikhom navkhrest prostrocheno myt<br>znaidemo svoiu pavutynku zi svitla`], 
 [`"Ламана лінія кордону, мов соснова гілка.<br>Дорога важка, коли несеш на спині свій дім і своє минуле. 
" <br> Сергій Жадан`, 
`The author Serhii Zhadan compares a borderline to a broken pine branch, confirming that the road is tough when one carries home and the past on the shoulders`,`Lamana liniia kordonu, mov sosnova hilka.<br>Doroha vazhka, koly nesesh na spyni svii dim i svoie mynule.`], 
 [`"Завжди пам’ятати розташування меблів у батьківському домі.<br>Ховати в кишені ключі, як засушену квітку. 
" <br> Сергій Жадан`,
`The author Serhii Zhadan promises to always remember the furniture layout in the parents house and hide the key in the pocket like a dried flower`,`Zavzhdy pamiataty roztashuvannia mebliv u batkivskomu domi.<br>Khovaty v kysheni kliuchi, yak zasushenu kvitku.`], 
 [`Країна болить, як перебита лапа<br>Щеняти, що виривається з нічної облоги. <br> Сергій Жадан`,`The author Serhii Zhadan comapres the pain of the country to the one puppy has when breaks a paw when escaping a night siege`,`Kraina bolyt, yak perebyta lapa<br>Shcheniaty, shcho vyryvaietsia z nichnoi oblohy.`],
 [`"минулого - нема. майбутнього - нема.<br>є наслідки причин. є послідовність значень.
" <br> Галина Крук`, `The author Halyna Kruk states that there is no past, no future but there are the consequences of the reasons and the order of meanings`,`mynuloho - nema. maibutnoho - nema.<br>ye naslidky prychyn. ye poslidovnist znachen.`], 
 [`є світло, при якім не відкидаєш тінь.<br>є куля, що летить до тебе вічність <br> Галина Крук`,`The author Halyna Kruk says that there is such light that doesn't give shadow and such bullet that forever reaches`,`ye svitlo, pry yakim ne vidkydaiesh tin.<br>ye kulia, shcho letyt do tebe vichnist`], 
 [`Ні долі, ні волі у мене нема, <br>Зосталася тільки надія одна: <br>Надія вернутись ще раз на Вкраїну, <br> Леся Українка`,`The author Lesia Ukrainka says there is nothing else left apart from the hope to come back at least once to Ukraine`,`Ni doli, ni voli u mene nema, <br>Zostalasia tilky nadiia odna: <br>Nadiia vernutys shche raz na Vkrainu,`], 
 [`"Бо для такого немає ні часу, ні місця, ані вимірів, ані сфер –<br>але все це все одно відбувається просто тут і тепер,
" <br> Катерина Бабкіна`,
`The author Kateryna Babkina wonders how it all happens here and now, although there is no time, no place, no dimension or sphere for this`,`Bo dlia takoho nemaie ni chasu, ni mistsia, ani vymiriv, ani sfer –<br>ale vse tse vse odno vidbuvaietsia prosto tut i teper`], 
 [`"І все, що після такого може зцілити – то хіба любов.<br>Любов зможе стулити докупи розчахнуті ран краї,<br>зможе живити собою потужні ріки та ручаї,
" <br> Катерина Бабкіна`,
`The author Kateryna Babkina believes that only love can heal the edges of the wound and revive the rivers and the springs`,`I vse, shcho pislia takoho mozhe ztsilyty – to khiba liubov.<br>Liubov zmozhe stulyty dokupy rozchakhnuti ran krai,<br>zmozhe zhyvyty soboiu potuzhni riky ta ruchai,`], 
 [`"людина сама нічого не може<br>людині завжди потрібен інший<br>на кого можна себе помножити<br>для кого варто писати вірші
" <br> Юрій Іздрик`,`The author Yurii Izdryk states that a person desperately <br>needs another person as an underlying reason to <br>multiply oneself on someone and to write poetry for someone`,`liudyna sama nichoho ne mozhe<br>liudyni zavzhdy potriben inshyi<br>na koho mozhna sebe pomnozhyty<br>dlia koho varto pysaty virshi`], 
 [`"коли повертається світ спиною<br>і знов поміж нами відстань і стіни<br>говори зі мною
" <br> Юрій Іздрик`,`The author Yurii Izdryk encourages to talk to each other when the world turns its back on you and there are walls and distance in between`,`koly povertaietsia svit spynoiu<br>i znov pomizh namy vidstan i stiny<br>hovory zi mnoiu`], 
 [`"Народ мій є! Народ мій завжди буде!<br>Ніхто не перекреслить мій народ!
" <br> Василь Симоненко`,`The author Vasyl Symonenko strongly believes that the nation exists and will always exist despite any attempts to destroy them.`,`Narod mii ye! Narod mii zavzhdy bude!<br>Nikhto ne perekreslyt mii narod!`], 
 [`"Живи, Україно, живи для краси,<br>Для сили, для правди, для волі!..
" <br> Олександр Олесь`,`The author Oleksandr Oles encourages Ukraine to live and exist for beauty, for strength, for truth and for freedom.`,`Zhyvy, Ukraino, zhyvy dlia krasy,<br>Dlia syly, dlia pravdy, dlia voli!..`]];

function newFact() {
    const randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay0').innerHTML = facts[randomFact][0];
    document.getElementById('factDisplay1').innerHTML = facts[randomFact][1];
    document.getElementById('factDisplay2').innerHTML = facts[randomFact][2];
}

!function newFactI() {
    newFact()
}();

let isRecording = document.getElementById("isRecording");

function initFunction() {
    // Display recording
    async function getUserMedia(constraints) {
        if (window.navigator.mediaDevices) {
            return window.navigator.mediaDevices.getUserMedia(constraints);
        }

        let legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

        if (legacyApi) {
            return new Promise(function(resolve, reject) {
                legacyApi.bind(window.navigator)(constraints, resolve, reject);
            }
            );
        } else {
            alert("user api not supported");
        }
    }

    isRecording.textContent = "Recording...";
    //

    let audioChunks = [];
    let rec;

    function handlerFunction(stream) {
        rec = new MediaRecorder(stream);
        rec.start();
        rec.ondataavailable = (e)=>{
            audioChunks.push(e.data);
            if (rec.state == "inactive") {
                let blob = new Blob(audioChunks,{
                    type: "audio/mp3"
                });
                console.log(blob);
                document.getElementById("audioElement").src = URL.createObjectURL(blob);
            }
        }
        ;
    }

    function startusingBrowserMicrophone(boolean) {
        navigator.mediaDevices.getUserMedia({
            audio: boolean
        }).then((stream)=>{
            handlerFunction(stream);
        }
        );
    }

    startusingBrowserMicrophone(true);

    // Stoping handler
    document.getElementById("stopRecording").addEventListener("click", (e)=>{
        rec.stop();
        isRecording.textContent = "Click PLAY to listen to the way you sound in Ukrainian";
    }
    );
}
