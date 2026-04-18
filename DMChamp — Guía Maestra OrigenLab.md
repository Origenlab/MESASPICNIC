# DMChamp — Guía Maestra OrigenLab

> **Plataforma:** https://app.dmchamp.com  
> **Tipo:** Chat web + WhatsApp + CRM + Bot de IA  
> **Aplica a:** Todos los proyectos OrigenLab (MESPIC, REDEIL, futuros)

---

## Tags
`#dmchamp` `#origenlab` `#chatbot` `#whatsapp` `#widget` `#astro` `#setup`

---

## 1. QUÉ ES DMCHAMP

DMChamp es una plataforma SaaS que centraliza en un solo panel:

- **Chat web** — widget embebido en el sitio, sin necesidad de WhatsApp
- **WhatsApp Business** (API oficial + escaneo QR)
- **Facebook Messenger / Instagram DMs / SMS**
- **CRM** — contactos, pipeline de negocios (tipo Kanban), citas
- **Bot de IA** — responde automáticamente, califica leads, agenda citas
- **Campañas masivas** de mensajería

El flujo típico es: visitor llega → abre el chat → el bot lo califica → se convierte en lead en WhatsApp.

---

## 2. ESTRUCTURA DE CUENTA — WORKSPACES

Cada negocio tiene su **propio workspace** (espacio de trabajo) con:
- Su propio Widget ID
- Su propia base de contactos y CRM
- Su propio bot de IA y campañas
- Sus propios créditos

**Cambiar de workspace:** ícono ⇔ en la esquina superior izquierda del sidebar.

### Workspaces actuales

| Negocio | Widget ID | Sitio | Campaña IA |
|---------|-----------|-------|------------|
| MESPIC Mesas Picnic | `MudstzucAJwOXl5hvruG` | mesaspicnic.com | Asistente MESPIC - Mesas Picnic |
| REDEIL | (ver panel) | redeil.com | (configurar) |

> ⚠️ **CRÍTICO:** Cada sitio web debe usar el Widget ID de **su propio workspace**. Jamás mezclar IDs entre negocios — causa que el bot responda con la identidad equivocada.

---

## 3. NAVEGACIÓN DEL PANEL

### Dashboard
Métricas en tiempo real: mensajes enviados/entregados/leídos, respuestas, reservas, contactos creados, créditos utilizados. Gráfica por período (7/30/90 días).

### Chats
Bandeja unificada con filtros:
- **IA Activa** — bot respondiendo solo
- **IA en pausa** — agente humano tomó el control
- **Atención Requerida** — bot escaló al humano
- Archivado | Seguimiento | Campañas | Etiquetas

### Contactos
Lista de leads captados. Toggle **Bot Activo** por contacto (para pausar el bot en conversaciones específicas). Exportar/Importar CSV.

### Campañas
Envíos masivos. Requiere plantillas aprobadas por WhatsApp para API.

### Citas
Sistema de agenda. Se integra con Google Calendar. El bot puede agendar citas automáticamente.

### Negocios
CRM Kanban para seguimiento de ventas.

---

## 4. CHECKLIST COMPLETO — NUEVO PROYECTO

```
PREPARACIÓN
[ ] 1. Crear workspace con el nombre exacto del negocio
[ ] 2. Configurar: Ajustes → Negocio → nombre, logo, zona horaria (América/Mexico_City)
[ ] 3. Configurar agente: Ajustes → Perfil → foto y nombre del agente (ej. "Sofia")

CANALES
[ ] 4. Activar Widget de Chat: Ajustes → Canales → Widget de Chat → Activar
[ ] 5. Configurar Apariencia del widget:
       - Foto del agente
       - Nombre del agente
       - Mensaje de Apertura (crítico para conversión)
       - Color primario (que haga match con el sitio)
[ ] 6. Anotar el Widget ID: Ajustes → Canales → Widget de Chat → Obtener Código

BOT DE IA — ASISTENTE DE CONFIGURACIÓN (11 pasos)
[ ] 7. Completar el Asistente: https://app.dmchamp.com/guided-onboarding
       Paso 1: Conectar canal (Chat Web)
       Paso 2: Nombre del negocio
       Paso 3: Descripción del negocio (pegar descripción del sitio)
       Paso 4: Horario de atención
       Paso 5: Timezone / Calendario (Google Calendar si aplica)
       Paso 6: Idioma del bot → seleccionar ESPAÑOL
       Paso 7: URL del sitio web (para que el bot lo analice)
       Paso 8: El bot analiza el sitio y extrae información automáticamente
       Paso 9: Configurar seguimientos (lead calificado, cita agendada, etc.)
       Paso 10: Personalidad / Persona del bot (escribir en ESPAÑOL)
       Paso 11: ¡Completar! → Campaña activa
[ ] 8. Verificar que la Persona esté en español (no en otro idioma)
[ ] 9. Agregar mínimo 10 Preguntas Frecuentes: Ajustes → Preguntas frecuentes

INSTALACIÓN EN SITIO ASTRO
[ ] 10. Editar src/layouts/BaseLayout.astro → agregar script antes de </body>
[ ] 11. Agregar script del Embudo (interceptor global de links wa.me)
[ ] 12. Adaptar WaBubble.astro para usar openDMChampChat()

VERIFICACIÓN
[ ] 13. Deploy en producción
[ ] 14. Abrir el sitio → hacer clic en cualquier botón WhatsApp → confirmar que abre el chat
[ ] 15. Enviar un mensaje de prueba → confirmar que el bot responde como el negocio correcto
[ ] 16. Revisar que el nombre del agente y del negocio sean los correctos en la respuesta
```

---

## 5. INSTALACIÓN DEL WIDGET EN ASTRO

### 5.1 Script principal + Embudo
En `src/layouts/BaseLayout.astro`, antes de `</body>`:

```astro
<!-- DMChamp Chat Widget -->
<script is:inline src="https://api.dmchamp.com/v1/chat-widget/TU_WIDGET_ID"></script>

<!-- Embudo: todos los links WA abren el chat primero -->
<script is:inline>
  (function () {
    var WA_FALLBACK = 'https://wa.me/NUMERO?text=' + encodeURIComponent('Hola, quiero más información.');

    function openDMChampChat() {
      var bubble = document.querySelector('.wai-chat-bubble');
      if (bubble) { bubble.click(); return; }
      // Widget aún cargando — reintenta en 800ms
      setTimeout(function () {
        var b2 = document.querySelector('.wai-chat-bubble');
        if (b2) { b2.click(); } else { window.open(WA_FALLBACK, '_blank', 'noopener'); }
      }, 800);
    }

    window.openDMChampChat = openDMChampChat;

    // Interceptar TODOS los links wa.me del sitio automáticamente
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href*="wa.me"]');
      if (!link) return;
      e.preventDefault();
      openDMChampChat();
    }, true);
  })();
</script>
```

### 5.2 Selectores DOM del widget (confirmados en producción)
```javascript
document.querySelector('.wai-chat-bubble')      // botón principal
document.querySelector('.wai-widget-container') // contenedor completo
document.querySelector('.wai-toast')            // toast de notificación
```

### 5.3 WaBubble.astro — convertir a botón del embudo
```astro
<!-- Reemplazar <a href="wa.me..."> por: -->
<button
  type="button"
  onclick="if(window.openDMChampChat){openDMChampChat()}else{window.open('https://wa.me/NUMERO','_blank')}"
  class="wab"
  aria-label="Chatear"
>
  <!-- ícono SVG de WhatsApp -->
</button>

<style>
  .wab { cursor: pointer; border: none; outline: none; }
</style>
```

---

## 6. CONFIGURAR EL BOT DE IA

### 6.1 Asistente de Configuración (11 pasos)
URL: `https://app.dmchamp.com/guided-onboarding`

Este wizard crea una **campaña de IA** con todo configurado:

| Paso | Qué configurar | Notas importantes |
|------|---------------|-------------------|
| 1 | Canal | Seleccionar "Chat Web" |
| 2 | Nombre del negocio | Nombre exacto como aparecerá en el bot |
| 3 | Descripción | Texto completo del negocio, servicios y zona de cobertura |
| 4 | Horario | Días y horas de atención |
| 5 | Calendario | Conectar Google Calendar si se agenda citas |
| 6 | Idioma | **Seleccionar ESPAÑOL** (importante — evita persona en holandés u otro idioma) |
| 7 | URL del sitio | El bot analiza y extrae información del sitio automáticamente |
| 8 | Análisis del sitio | Esperar a que DMChamp procese el contenido |
| 9 | Seguimientos | Configurar triggers (lead calificado, cita agendada) |
| 10 | Persona del bot | **Escribir en ESPAÑOL** — definir nombre, personalidad, rol |
| 11 | Completado | Campaña activa y lista |

### 6.2 Plantilla de Persona (Paso 10)
Adaptar para cada negocio:

```
Eres [NOMBRE_AGENTE], la especialista en ventas y atención al cliente de [NEGOCIO].
Tu rol es ser el primer punto de contacto para clientes potenciales que buscan
[SERVICIO PRINCIPAL] en [ZONA DE COBERTURA]. Encarnas el profesionalismo,
la confiabilidad y el conocimiento profundo de toda la oferta de [NEGOCIO].
Tu estilo de comunicación es claro, respetuoso y orientado a ayudar a cada
cliente de forma rápida y eficiente.

Características clave:
- Escuchas con atención para entender las necesidades específicas del cliente
- Comunicas con claridad y sin rodeos sobre productos, servicios y precios
- Eres orientada al cliente y sabes generar confianza a través de la honestidad
- Crees en la calidad y confiabilidad de [NEGOCIO] como proveedor de servicios
- Eres hábil para convertir consultas en solicitudes de cotización concretas
- Representas la imagen profesional de [NEGOCIO] en cada conversación

Tu enfoque:
- Siempre haz preguntas dirigidas para ofrecer rápidamente la solución correcta
- Presenta la información de forma concisa y sin extensiones innecesarias
- Guía al cliente hacia agendar una cita o solicitar una cotización
- Responde siempre en el idioma que use el cliente
```

### 6.3 Preguntas Frecuentes
En `Ajustes → Preguntas frecuentes`. Mínimo 10 pares Pregunta → Respuesta. El bot las usa automáticamente.

Ejemplos para un negocio de renta:
- ¿Cuál es el precio / costo?
- ¿Tienen disponibilidad para [fecha]?
- ¿Hacen entrega a domicilio / en toda la ciudad?
- ¿Cuánto tiempo dura el servicio?
- ¿Qué incluye el servicio?
- ¿Cómo hago una reserva / cotización?
- ¿Cuál es el mínimo de piezas / personas?
- ¿Tienen descuentos o paquetes?

### 6.4 Mensaje de Apertura
El primer mensaje que ve el usuario al abrir el chat. Debe:
- Identificar el negocio y el servicio
- Hacer una pregunta para iniciar la calificación
- Ser conciso y directo

Ejemplo: *"¿Cómo puedo ayudarte a que tu evento sea todo un éxito?"*

---

## 7. FLUJO DEL EMBUDO

```
Visitor llega al sitio
       ↓
Clic en botón WhatsApp / burbuja / CTA
       ↓
openDMChampChat() ejecuta → .wai-chat-bubble.click()
       ↓
Se abre el Widget de Chat
       ↓
Bot saluda con Mensaje de Apertura
       ↓
Bot califica: tipo de servicio, fecha, personas, presupuesto
       ↓
Bot responde preguntas frecuentes automáticamente
       ↓
Lead calificado → Bot ofrece continuar por WhatsApp
       ↓
WhatsApp abre con contexto pre-llenado (número + texto)
       ↓
Contacto guardado en DMChamp CRM
       ↓
Agente humano da seguimiento si es necesario
```

---

## 8. CRÉDITOS

- DMChamp cobra créditos por mensajes enviados/recibidos por el bot
- Costo promedio: ~0.64 créditos por chat completo
- Comprar créditos: `Ajustes → Facturación`
- Monitorear: Dashboard → "Créditos Utilizados"

---

## 9. TROUBLESHOOTING

| Problema | Causa probable | Solución |
|----------|---------------|---------|
| Widget no aparece en el sitio | Script mal ubicado o Widget ID incorrecto | Verificar que el script está antes de `</body>`; confirmar el ID |
| Widget aparece pero WA no lo abre | `.wai-chat-bubble` no encontrado al momento del clic | El interceptor tiene retry de 800ms — si falla, revisar que el script de embudo esté cargado |
| Bot responde con nombre/negocio incorrecto | Widget ID de workspace equivocado instalado | Confirmar que el ID en BaseLayout.astro corresponde al workspace correcto |
| Persona del bot en otro idioma | En Paso 6 del wizard se seleccionó idioma incorrecto | Ir a la campaña → editar el campo Persona → reescribir en español |
| Widget devuelve 503 | Servidor caído o ID inválido | Verificar el ID en el panel; si persiste, contactar soporte DMChamp |
| Bot no responde a preguntas específicas | Pocas FAQ o descripción incompleta | Agregar más Preguntas Frecuentes; enriquecer la descripción del negocio |
| Contactos sin nombre | Vienen del widget anónimos | Normal — el bot captura el nombre durante la conversación |

---

## 10. DATOS POR PROYECTO

### MESPIC — Mesas Picnic
| Campo | Valor |
|-------|-------|
| Widget ID | `MudstzucAJwOXl5hvruG` |
| Workspace doc ID | `c6323f64-8497-4c02-9e68-5f130f96f533` |
| Campaña IA | Asistente MESPIC - Mesas Picnic |
| Agente | Sofia |
| Teléfono WA | 55 6432 8954 |
| Número WA en links | 5531281706 |
| Sitio | mesaspicnic.com |
| Repo | github.com/Frankoropeza/mesaspicnic |
| Dev | `npm run dev` → localhost:4321 |
| Ruta local | `/Users/frankoropeza/Documents/Claude/Projects/MESASPICNIC` |
| Créditos (abr 2026) | ~1,468 |

### REDEIL — Renta Iluminación/Sonido
| Campo | Valor |
|-------|-------|
| Widget ID | (obtener del panel) |
| Campaña IA | (configurar) |
| Sitio | redeil.com |

---

## 11. URLS CLAVE

| Sección | URL |
|---------|-----|
| Dashboard | https://app.dmchamp.com/ |
| Chats | https://app.dmchamp.com/chats |
| Contactos | https://app.dmchamp.com/contacts |
| Campañas | https://app.dmchamp.com/campaigns |
| Citas | https://app.dmchamp.com/appointments |
| Negocios (CRM) | https://app.dmchamp.com/deals |
| Canales | https://app.dmchamp.com/settings/channels |
| Configuración Widget | https://app.dmchamp.com/settings/channels → Widget → Configurar |
| Preguntas Frecuentes | https://app.dmchamp.com/settings → Preguntas frecuentes |
| Plantillas | https://app.dmchamp.com/settings → Plantillas |
| Wizard Onboarding | https://app.dmchamp.com/guided-onboarding |

---

## 12. HISTORIAL POR PROYECTO

### MESPIC (abril 2026)
- ✅ Widget instalado en BaseLayout.astro con Widget ID `MudstzucAJwOXl5hvruG`
- ✅ WaBubble.astro convertido a botón del embudo
- ✅ Asistente de Configuración (11 pasos) completado al 100%
- ✅ Campaña "Asistente MESPIC - Mesas Picnic" activa en canal Chat Web
- ✅ Agente: Sofia | Persona en español | Identidad MESPIC confirmada
- ✅ Bot probado en mesaspicnic.com — responde correctamente como MESPIC
- ✅ Flujo de ventas: califica → redirige a WhatsApp con contexto pre-llenado
- ✅ Google Calendar conectado para agendamiento de citas

---

*Documento generado: abril 2026 — OrigenLab*
