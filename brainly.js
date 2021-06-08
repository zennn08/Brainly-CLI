const brainly = require('brainly-scraper');
const Brenly = require('brainly-scraper-v2');

module.exports = BrainlySearch = (pertanyaan, jumlah, cb) => {
    brainly(pertanyaan.toString(), Number(jumlah)).then((res) => {
        let brainlyResult = []
        res.data.forEach((ask) => {
            let opt = {
                pertanyaan: ask.pertanyaan,
                fotoPertanyaan: ask.questionMedia
            }
            ask.jawaban.forEach(answer => {
                opt.jawaban = {
                    judulJawaban: answer.text,
                    fotoJawaban: answer.media
                }
            })
            brainlyResult.push(opt)
        })
        return brainlyResult
    }).then(x => {
        cb(x)
    }).catch(err => {
        brainly(pertanyaan.toString(), Number(jumlah)), "id").then(res => {
            console.log(res);
            let brainlyResulti = []
            res.data.forEach((ask) => {
                let opt = {
                    pertanyaan: ask.pertanyaan,
                    fotoPertanyaan: ask.questionMedia
                }
                ask.jawaban.forEach(answer => {
                    opt.jawaban = {
                        judulJawaban: answer.text,
                        fotoJawaban: answer.media
                    }
                })
                brainlyResulti.push(opt)
            })
            return brainlyResulti
        });
    })
}
