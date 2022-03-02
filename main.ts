function bal_kanyar (szám: number) {
    for (let index = 0; index < szám; index++) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp + 5)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp + 15)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab - 12)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab - 24)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp - 5)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp - 15)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab + 12)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab + 24)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp)
        basic.pause(50)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp + 5)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp + 15)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab + 12)
        basic.pause(50)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab)
        basic.pause(50)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp)
    }
}
function jobb_kanyar (szám: number) {
    for (let index = 0; index < szám; index++) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp - 15)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp - 5)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab + 12)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab + 24)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp + 15)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp + 5)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab - 12)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab - 24)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp)
        basic.pause(50)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp - 15)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp - 5)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab - 12)
        basic.pause(50)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab)
        basic.pause(50)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp)
    }
}
function hátra (szám: number) {
    for (let index = 0; index < szám; index++) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp + 15)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp + 5)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab + 11)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab + 11)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab + 22)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab + 22)
        basic.pause(150)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp - 5)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp - 15)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab - 11)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab - 11)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab - 22)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab - 22)
        basic.pause(150)
    }
}
function előre (szám: number) {
    for (let index = 0; index < szám; index++) {
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp - 15)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp - 5)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab + 11)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab + 11)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab + 22)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab + 22)
        basic.pause(150)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp + 5)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp + 15)
        basic.pause(100)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab - 11)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab - 11)
        basic.pause(30)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab - 22)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab - 22)
        basic.pause(150)
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp)
        basic.pause(100)
    }
}
function alap () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, jobb_lab)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, jobb_talp)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, bal_lab)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, bal_talp)
    basic.pause(500)
}
function kalibrálás (servo1: number, servo2: number, servo3: number, servo4: number) {
    jobb_lab = servo1
    jobb_talp = servo2
    bal_lab = servo3
    bal_talp = servo4
}
let jobb_lab = 0
let bal_lab = 0
let bal_talp = 0
let jobb_talp = 0
kalibrálás(87, 89, 78, 87)
alap()
basic.forever(function () {
    basic.pause(500)
    jobb_kanyar(8)
    alap()
    basic.pause(1000)
    bal_kanyar(8)
    basic.pause(500)
    alap()
    basic.pause(500)
})
