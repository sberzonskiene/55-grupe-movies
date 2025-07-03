import { IsValid } from "../../lib/isValid.js";

export function postRegister(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        email: 'email',
        password: 'password',
        tos: 'tos',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    console.log(req.body);

    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}