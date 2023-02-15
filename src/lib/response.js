
module.exports = async (ctx, res, option = {}) => {
  console.log(this);
  // console.log(option);
  ctx.body = {
    code: option.code || '00000',
    data: res,
    message: option.message || "请求成功",
    desc: option.desc || 'success'
  }
}
