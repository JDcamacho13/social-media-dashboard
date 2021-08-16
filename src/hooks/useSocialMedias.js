import { useEffect } from 'react';

export const useSocialMedias = (updateSocialMedia) => {
    useEffect(() => {
        fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YOUTUBE_ID_USER}&key=${process.env.YOUTUBE_ACCESS_KEY}`
        )
            .then((response) => response.json())
            .then((data) =>
                updateSocialMedia('youtube', data.items[0].statistics.viewCount)
            )
            .then(() => updateSocialMedia('instagram', 128))
            .then(() => updateSocialMedia('facebook', 611))
            .then(() => updateSocialMedia('load', true));
    }, []);
};

// fetch(
//     `https://graph.facebook.com/v11.0/me/friends?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`
// )
//     .then((response) => response.json())
//     .then((data) =>
//         updateSocialMedia('facebook', data.summary.total_count)
//     )
