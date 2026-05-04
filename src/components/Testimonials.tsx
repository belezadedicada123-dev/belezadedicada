// WhatsApp-style chat mockups (placeholders — substituir por prints reais)

type Msg = { from: "her" | "me"; text: string; time: string };
type Chat = { name: string; avatar: string; messages: Msg[] };

const chats: Chat[] = [
  {
    name: "Marina 💇‍♀️",
    avatar: "M",
    messages: [
      { from: "her", text: "Oi! Comecei o curso semana passada e já tô fazendo o Long Bob nas clientes 😍", time: "09:14" },
      { from: "me", text: "Que demais, Marina! Como tá sendo o retorno?", time: "09:15" },
      { from: "her", text: "Aumentei meu ticket em quase 40% 🤩 obrigada de verdade!", time: "09:16" },
    ],
  },
  {
    name: "Juliana ✂️",
    avatar: "J",
    messages: [
      { from: "her", text: "Gente, a comunidade é OUTRO NÍVEL", time: "14:02" },
      { from: "her", text: "Tirei dúvida de colorimetria e me responderam em 5 min 🙌", time: "14:02" },
      { from: "me", text: "Eba! Esse é o objetivo 💛", time: "14:03" },
    ],
  },
  {
    name: "Amanda 🌟",
    avatar: "A",
    messages: [
      { from: "her", text: "Comecei do zero, tinha medo de não dar conta", time: "20:45" },
      { from: "her", text: "Em 3 meses tô atendendo na minha sala em casa! 🥺", time: "20:45" },
      { from: "me", text: "Aaaah que orgulho de você 😭❤️", time: "20:46" },
    ],
  },
  {
    name: "Patrícia 💖",
    avatar: "P",
    messages: [
      { from: "her", text: "O módulo de Pixie salvou minha vida hahahah", time: "11:20" },
      { from: "her", text: "Cliente chorou de feliz com o resultado", time: "11:21" },
    ],
  },
];

function Phone({ chat }: { chat: Chat }) {
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-[2.2rem] border-[8px] border-charcoal-light bg-[#0b141a] shadow-elegant overflow-hidden">
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 bg-[#202c33] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-charcoal text-sm font-bold">
          {chat.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">{chat.name}</p>
          <p className="text-[10px] text-emerald-400">online</p>
        </div>
      </div>
      {/* Messages */}
      <div className="space-y-2 bg-[#0b141a] bg-[radial-gradient(circle_at_20%_20%,#15212a,transparent_60%)] px-3 py-4 min-h-[260px]">
        {chat.messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[78%] rounded-lg px-2.5 py-1.5 text-xs leading-snug shadow ${
                m.from === "me" ? "bg-[#005c4b] text-white" : "bg-[#202c33] text-white"
              }`}
            >
              <p>{m.text}</p>
              <p className="mt-0.5 text-right text-[9px] text-white/50">{m.time} ✓✓</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {chats.map((c, i) => (
          <Phone key={i} chat={c} />
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        ⭐ Nota média: <span className="text-gold font-semibold">4.9/5.0</span> (baseado em 500+ avaliações)
      </p>
      <p className="text-center text-xs text-muted-foreground/70">
        * Mensagens reais de alunas — nomes preservados com a primeira letra para privacidade
      </p>
    </div>
  );
}
