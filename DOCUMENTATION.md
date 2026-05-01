# Saúde Pronta - Documentação do Projeto

## 📱 Sugestões de Nomes Professionais
1. **Saúde Pronta** (Atual - Focado em agilidade)
2. **Doutor Angola** (Focado em confiança regional)
3. **ConsultAi** (Moderno e tecnológico)
4. **Kikola Saúde** (Kikola = Pureza/Saúde em Kimbundu)
5. **AO-Médico** (Direto e prático)

---

## 🎯 Fluxo do Usuário (User Journey)

### Paciente
1. **Descoberta**: O usuário abre o app e vê o "Assistente Inteligente" ou pesquisa por especialidade.
2. **Seleção**: Escolhe um médico baseado em avaliações, proximidade (GPS) e preço.
3. **Agendamento**: Seleciona um horário e método de pagamento (Multicaixa Express).
4. **Confirmação**: Recebe uma notificação via WhatsApp/SMS.
5. **Consulta**: Realiza a consulta e, ao final, avalia o médico no app.

### Médico
1. **Onboarding**: O médico cadastra sua cédula profissional.
2. **Gestão**: Define seus horários de atendimento em cada clínica.
3. **Atendimento**: Visualiza a lista de pacientes do dia e o histórico médico básico.

---

## ⚙️ Estrutura do Banco de Dados (Firestore)

- **users**: { uid, nome, telefone, email, role: 'patient'|'doctor'|'admin' }
- **doctors**: { uid, especialidade, bio, rating, consults, education, price, clinics: [] }
- **clinics**: { id, name, location, gps: { lat, lng }, doctors: [] }
- **appointments**: { id, patientId, doctorId, clinicId, date, time, status: 'pending'|'confirmed'|'done', paymentStatus: 'paid'|'pending', paymentMethod: 'mcx'|'cash' }
- **reviews**: { id, doctorId, patientId, rating, comment, date }

---

## 💰 Ideias de Monetização para Angola

1. **Taxa de Conveniência**: Cobrar uma pequena taxa (ex: 500 Kz) por cada marcação bem-sucedida via app.
2. **Assinatura Premium para Clínicas**: Destaque nas pesquisas e relatórios estatísticos avançados para clínicas parceiras.
3. **Perfil Verificado para Médicos**: Taxa mensal para médicos que desejam o selo de "Verificado" (prioridade na lista).
4. **Publicidade Direcionada**: Banners de laboratórios de análises clínicas e farmácias locais.

---

## 🌍 Estratégia de Lançamento em Angola
- **Fase 1**: Soft launch apenas em Luanda (Cazenga, Talatona, Mutamba).
- **Fase 2**: Parcerias com o Ministério da Saúde (Consultas Públicas).
- **Fase 3**: Expansão para Benguela, Huambo e Lubango.
- **Diferencial**: Otimização para aparelhos de baixo custo e cache para funcionar com internet instável.
