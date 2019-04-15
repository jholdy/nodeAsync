exports.get = async (req, res, next) => {
  console.log('comando 3')
  await setTimeout(()=>{
            res.status(200).send({
                title: "Esperando 3 segundos"
            });
        },
        3000
    );
};