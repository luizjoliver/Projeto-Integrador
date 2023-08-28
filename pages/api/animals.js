export default function handler(req, res) {
    res.status(200).json([{
        nome:"Molly",
        idade:6,
        tipo:"Gato",
        restricoes:"Come somente sachê wiskhas"
    },{
        nome:"Getulio",
        idade:4,
        tipo:"Gato",
        restricoes:"Possui alergia a coronavac , famoso vira lacoste"
    }])
  }
  