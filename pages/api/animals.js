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
        restricoes:"Possui alergia a coronavac , famoso vira lacoste",
            vacinas:[{
                nome:"Astrazenica",
                data:"16/09/2021"
            },{
                nome:"CoronaVac",
                data:"15/06/2020"
            }]
    },
    {
        nome:"Hunter",
            idade:7,
            tipo:"Cachorro",
            restricoes:"Possui alergia a chocolate",
            vacinas:[{
                nome:"Astrazenica",
                data:"16/09/2021"
            }]
    }])
  }
  