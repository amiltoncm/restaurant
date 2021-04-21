module.exports = {
  
  render(req, res, error){
    res.render('reservations', {
      title: req.title,
      subTitle: req.subTitle,
      imgBackground: req.imgBackground,
      body: req.body,
      error
    })
  }
  
}