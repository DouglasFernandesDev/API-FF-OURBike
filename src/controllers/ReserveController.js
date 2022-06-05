import Reserve from '../models/Reserve'
import User from '../models/User'
import Bike from '../models/Bike'

class ReserveController {
  async index(req, res) {
    const { user_id } = req.headers

    const reserves = await Reserve.find({ user: user_id }).populate('bike')

    return res.json(reserves)
  }

  async store(req, res) {
    const { user_id } = req.headers
    const { bike_id } = req.params
    const { date } = req.body

    const bike = await Bike.findById(bike_id)
    if (!bike) {
      return res.status(400).json({ error: 'Essa bike não existe.' })
    }

    if (bike.status !== true) {
      return res.status(400).json({ error: 'Solicitação indisponivel.' })
    }

    const user = await User.findById(user_id)
    if (String(user._id) === String(bike.user)) {
      return res.status(401).json({ error: 'Reserva não permitida.' })
    }

    const reserve = await Reserve.create({
      user: user_id,
      bike: bike_id,
      date
    })

    await reserve.populate('bike').populate('user').execPopulate()

    return res.json(reserve)
  }

  async destroy(req, res) {
    const { reserve_id } = req.body

    await Reserve.findByIdAndDelete({ _id: reserve_id })

    return res.send()
  }
}

export default new ReserveController()
