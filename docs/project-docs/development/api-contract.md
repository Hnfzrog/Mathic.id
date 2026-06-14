# Description
Defines the external integrations, specifically the WhatsApp deep link integration for the booking form.

# Important
- Form validation must happen on the client-side before redirecting.

# Table of Contents
- [Scope](#scope)
- [Goals](#goals)
- [Non Goals](#non-goals)
- [Form to WhatsApp Integration](#form-to-whatsapp-integration)

# Scope
Client-side form submission logic.

# Goals
- Seamlessly transition from the website form to a pre-filled WhatsApp message.

# Non Goals
- Storing form data locally or on a server.

# Form to WhatsApp Integration

## Target WhatsApp Number
`6281517334524`

## Input Fields
| Field       | Type     | Required | Options                                    |
|-------------|----------|----------|--------------------------------------------|
| Nama Lengkap| text     | Yes      | Free text                                  |
| Kelas       | dropdown | Yes      | SD (1–6), SMP (7–9), SMA (10–12)           |
| Materi      | text     | No       | Free text (e.g., "Aljabar")                |

## Submission Behavior
When the user clicks "Kirim via WhatsApp", validate the inputs. If valid, generate the following URL and open it in a new tab (`target="_blank"`):

`https://wa.me/6281517334524?text=Halo+mathic.id!+%F0%9F%91%8B+Perkenalkan,+saya+[NAMA],+kelas+[KELAS].%0ASaya+tertarik+mendaftar+les+matematika+private.%0AMateri+yang+ingin+dipelajari:+[MATERI+or+'-'].%0AMohon+info+lebih+lanjut.+Terima+kasih!+%F0%9F%99%8F`

## Validation Rules
- **Nama Lengkap:** Cannot be empty. Show inline error if empty.
- **Kelas:** Must be selected. Show inline error if unselected.
