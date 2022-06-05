import Bike from '../models/Bike'

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers

    const bikes = await Bike.find({ user: user_id })

    return res.json(bikes)
  }
}

export default new DashboardController()
