const welcomegoodbye = process.env.WELCOMEGOODBYE || 'TRUE'; 
const botname = process.env.BOTNAME || 'ZEZE47-MD';

const Events = async (client, Nick) => {
    
    try {
        let metadata = await client.groupMetadata(Nick.id);
        let participants = Nick.participants;
        let desc = metadata.desc || "No Description";
        let groupMembersCount = metadata.participants.length;

        for (let num of participants) {
            let dpuser;

            try {
                dpuser = await client.profilePictureUrl(num, "image");
            } catch {
                dpuser = "https://i.imgur.com/wZcGmu7.jpeg";
            }

            if (Nick.action === "add") {
                let userName = num;

                let Welcometext = `@${userName.split("@")[0]} Holla👋,\n\nWelcome to ${metadata.subject}.\n\nYou might want to read group description,\nFollow group rules to avoid being removed.\n\n ${botname} 2025.`;
                if (welcomegoodbye === 'TRUE') {
                    await client.sendMessage(Nick.id, {
                        image: { url: dpuser },
                        caption: Welcometext,
                        mentions: [num],
                        });
                }
            } else if (Nick.action === "remove") {
                let userName2 = num;

                let Lefttext = `@${userName2.split("@")[0]} Goodbye we shall miss you😔.\n\nAnyway Goodbye .`;
                if (welcomegoodbye === 'TRUE') {
                    await client.sendMessage(Nick.id, {
                        image: { url: dpuser },
                        caption: Lefttext,
                        mentions: [num],
                    });
                }
               }
              }
             } catch (err) {
        console.log(err);
    }
};

module.exports = Events;
