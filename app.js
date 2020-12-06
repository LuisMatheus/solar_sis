console.log("Hello World")
let sol = new sphere(0,0,0,100,10,10);

let mercurio = new sphere(698,0,0,1.5,10,10)

let venus = new sphere(1080,0,0,2.47,10,10)

let terra = new sphere(1490,0,0,10,10,10)
let lua = new sphere(1490+20,0,0,1.7,10,10)

let marte = new sphere(2279,0,0,3.338,10,10)
let deimos = new sphere(2279+23,0,0,0.00002,10,10)
let fobos = new sphere(2279+60,0,0,0.000011,10,10)

let jupiter = new sphere(7780,0,0,100,10,10)
let io = new sphere(7780+180,0,0,0.1821,10,10)
let europa = new sphere(7780+150,0,0,0.48,10,10)
let ganimedes = new sphere(7780+260,0,0,1.2,10,10)

let saturno = new sphere(9860,0,0,91,10,10)
let tita = new sphere(9860+51,0,0,0.4,10,10)
let hiperion = new sphere(98860+93,0,0,0.000001,10,10)
let encelado = new sphere(9860+23,0,0,0.03,10,10)

let urano = new sphere(29000,0,0,30,10,10)
let titania = new sphere(2900+43,0,0,0.012,10,10)
let oberon = new sphere(2900+58,0,0,0.011,10,10)
let umbriel = new sphere(2900,0,0,0.091,10,10)

let netuno = new sphere(45000,0,0,38,10,10)
let tritao = new sphere(45000+35,0,0,0.4,10,10)
let proteu = new sphere(45000+17,0,0,0.006,10,10)
let nereida = new sphere(45000+551,0,0,0.002,10,10)

function setup() {
    createCanvas(720, 400,WEBGL);
    createEasyCam();
    frameRate(60);
}

function draw() {
    background(50);
    sol.setColor('#fcba03');
    sol.draw();
    sol.rotateZ(0.0006)

    mercurio.draw();
    mercurio.setColor('#a88932')
    mercurio.orbit(0.002,[0,0,0])

    venus.draw();
    venus.setColor('#856900')
    venus.orbit(0.006,[0,0,0])
    
    terra.setColor('#0335fc');
    terra.draw();
    terra.orbit(0.01,[0,0,0]);
    lua.draw();
    lua.setColor('#e6e0d1')
    lua.orbit(0.01,[terra.x,terra.y,terra.z])

    marte.draw()
    marte.setColor('#633b3b')
    marte.orbit(0.018,[0,0,0])
    deimos.draw()
    deimos.setColor('#cfb082')
    deimos.orbit(0.000007,[marte.x,marte.y,marte.z])
    fobos.draw()
    fobos.setColor('#e8e2da')
    fobos.orbit(0.0009,[marte.x,marte.y,marte.z])

    jupiter.draw()
    jupiter.setColor('#d1b673')
    jupiter.orbit(0.12,[0,0,0])
    io.draw()
    io.setColor('#d1a126')
    io.orbit(0.0005,[jupiter.x,jupiter.y,jupiter.z])
    europa.draw()
    europa.setColor("#e3c781")
    europa.orbit(0.0001,[jupiter.x,jupiter.y,jupiter.z])
    ganimedes.draw()
    ganimedes.setColor('#f5e3b5')
    ganimedes.orbit(0.001,[jupiter.x,jupiter.y,jupiter.z])

    saturno.draw()
    saturno.setColor('#fff1cf')
    saturno.orbit(0.2,[0,0,0])
    tita.draw()
    tita.setColor('#93b37f')
    tita.orbit(0.0004,[saturno.x,saturno.y,saturno.z])
    hiperion.draw()
    hiperion.setColor('#999999')
    hiperion.orbit(0.00002,[saturno.x,saturno.y,saturno.z]);
    encelado.draw()
    encelado.setColor('#ffffff')
    encelado.orbit(0.00002,[saturno.x,saturno.y,saturno.z])

    urano.draw()
    urano.setColor('#4c93e6')
    urano.orbit(0.002,[0,0,0])
    titania.draw()
    titania.setColor('#b5ae6d')
    titania.orbit(0.0002,[urano.x,urano.y,urano.z])
    oberon.draw()
    oberon.setColor('#8c8437')
    oberon.orbit(0.0003,[urano.x,urano.y,urano.z])
    umbriel.draw()
    umbriel.setColor('#63635f')
    umbriel.draw(0.0001,[urano.x,urano.y,urano.z])
    

    netuno.draw()
    netuno.setColor('#0022ff')
    netuno.orbit(0.000001,[0,0,0])
    tritao.draw()
    tritao.setColor('#6c7530')
    tritao.orbit(0.0001,[netuno.x,netuno.y,netuno.z])
    proteu.draw()
    proteu.setColor('#808080')
    proteu.orbit(0.00002,[netuno.x,netuno.y,netuno.z])
    nereida.draw()
    nereida.setColor('#808080')
    nereida.orbit(0.01,[netuno.x,netuno.y,netuno.z])
}