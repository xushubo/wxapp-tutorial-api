Page({
  onHide: function () {
    console.log('page hide');
  },
  onShow: function () {
    console.log('page show');
  },
  openLocation: function (e) {
    console.log(e)
    var value = e.detail.value
    console.log(value)
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    })
  }
})
