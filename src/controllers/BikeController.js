import Bike from '../models/Bike'
import User from '../models/User'
import * as Yup from 'yup'

class BikeController {
  async index(req, res) {
    const { status } = req.query

    const bikes = await Bike.find({ status })

    return res.json(bikes)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().notRequired(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required()
    })

    const { filename } = req.file
    const { description, price, location, status } = req.body
    const { user_id } = req.headers

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na Validacao' })
    }

    const bike = await Bike.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status
    })

    return res.json(bike)
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().notRequired(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required()
    })

    const { filename } = req.file
    const { bike_id } = req.params
    const { description, price, location, status } = req.body
    const { user_id } = req.headers

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na Validacao' })
    }

    const user = await User.findById(user_id)
    const bikes = await Bike.findById(bike_id)

    if (String(user._id) !== String(bikes.user)) {
      return res.status(401).json({ error: 'Nao autorizado' })
    }

    await Bike.updateOne(
      { _id: bike_id },
      {
        user: user_id,
        thumbnail: filename,
        description,
        price,
        location,
        status
      }
    )

    return res.send()
  }

  async destroy(req, res) {
    const { bike_id } = req.body
    const { user_id } = req.headers

    const user = await User.findById(user_id)
    const bikes = await Bike.findById(bike_id)

    if (String(user._id) !== String(bikes.user)) {
      return res.status(401).json({ error: 'Nao autorizado' })
    }

    await Bike.findByIdAndDelete({ _id: bike_id })

    return res.json({ message: 'Excluida com sucesso' })
  }
}
export default new BikeController()
