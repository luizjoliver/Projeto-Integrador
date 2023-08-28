export default function handler(req, res) {
    res.status(200).json([{
        nome:"Molly",
        idade:6,
        tipo:"Gato"
    },{
        nome:"Getulio",
        idade:4,
        tipo:"Gato"
    }])
  }
  