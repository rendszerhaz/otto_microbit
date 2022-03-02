namespace otto_microbit {
    //%blockid = bal_kanyar
    //%block = "bal_kanyar  $szám"



let jobb_talp = 0
let bal_talp = 0
let bal_lab = 0
let jobb_lab = 0
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
}