export default function handler(req, res) {
    res.status(200).json([{
        nome:"Molly",
        imgPet:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75VHvDdRHzCidIv9SyhiJAeg8WpuCTXUgNcJp0zgE0AYbrzw61TudvTmCIDHc-54Vx5Y&usqp=CAU",
        idade:6,
        tipo:"Gato",
        restricoes:"Come somente sachê wiskhas"
    },{
        nome:"Getulio",
        idade:4,
        imgPet:"https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
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
            imgPet:"https://www.adoropets.com.br/wp-content/uploads/2018/03/pinscher-em-pe.jpg",
            restricoes:"Possui alergia a chocolate",
            vacinas:[{
                nome:"Astrazenica",
                data:"16/09/2021"
            }]
    },{
        nome:"Rex",
        imgPet:"https://www.petz.com.br/blog/wp-content/uploads/2020/05/como-criar-tartaruga-1280x720.jpg",
        idade:2,
        tipo:"Tartaruga",
        restricoes:"Necessita de um ambiente aquático"
    },
    
    
])
  }
  