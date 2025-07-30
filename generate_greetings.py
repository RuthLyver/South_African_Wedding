# save as generate_greetings.py
from gtts import gTTS

# 1️⃣ French greeting
french_text = "Bonjour, bienvenue en Afrique du Sud !"
tts_fr = gTTS(french_text, lang="fr")
tts_fr.save("media/french.mp3")
print("Saved media/french.mp3")

# 2️⃣ English greeting
english_text = "Hello, welcome to South Africa!"
tts_en = gTTS(english_text, lang="en")
tts_en.save("media/english.mp3")
print("Saved media/english.mp3")

# 3️⃣ Sepedi – gTTS doesn't support it.
# Please record your Sepedi greeting (e.g. "Dumela, re a le amohela!") 
# and save it as media/sepedi.mp3
print("❗ Please record Sepedi manually and save as media/sepedi.mp3")
