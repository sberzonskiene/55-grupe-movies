export function postRegister(req, res) {
    console.log(req.body);
    
    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}