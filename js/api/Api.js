import {AuthorsConfig} from "../pagesConfigs/hd/authors/AuthorsConfig.js";

export class Api {

    static get URL_MENU() { return "/api/menu/" };

    static #GQL_URL = "http://192.168.20.128:5009/graphql";
    static #FETCH_INIT = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };


    constructor() {

    }

    static async get(url, params=null) {
        await this.#requestDelayEmulation();
        let result;
        switch (url) {
            case Api.URL_MENU: {
                //result = {"roles":["admin","staff","space_admin","super_admin","cms_db_admin"],"items":[{"name":"Home","link":"/"},{"name":"Anna Studio","link":"/anna/"},{"name":"Content","children":[{"name":"Activities","children":[{"name":"Activities","link":"/activity/"},{"name":"Activity Categories","link":"/activitycategory/"},{"name":"Activity Types","link":"/activitytype/"},{"name":"Favorite Tips","link":"/favoritetip/"},{"name":"Game Packages","link":"/gamepackage/"},{"name":"Instant Play Activity Packages","link":"/instantplaypackage/"},{"name":"Instruction Templates","link":"/instructiontemplate/"},{"name":"Reporter Templates","link":"/reportertemplate/"},{"name":"Research References","link":"/researchreference/"},{"name":"Research Topics","link":"/researchtopic/"},{"name":"Tips (Activity Tasks)","link":"/tip/"},{"name":"User Activity Image (ex. HappifyImage)","link":"/happifyimage/"}]},{"name":"Assessments","children":[{"name":"Assessment Schedule","link":"/assessmentschedule/"},{"name":"Assessment Schedule Notification Control","link":"/assessmentschedulenotifications/"},{"name":"CS Questions","link":"/csquestions/"},{"name":"CS Strength Details for Adults","link":"/csadultstrengthdetails/"},{"name":"CS Strength Details for Youths","link":"/csyouthstrengthdetails/"},{"name":"CS Strengths","link":"/csstrengths/"},{"name":"Work Assessment Answers","link":"/workassessmentanswer/"},{"name":"Work Assessment Questions","link":"/workassessmentquestion/"},{"name":"Work Assessment User Answers","link":"/workassessmentuseranswer/"},{"name":"Work Assessment User Raw Answers","link":"/workassessmentquestionanswer/"}]},{"name":"Community","children":[{"name":"Comments","link":"/genericcomment/"},{"name":"Discussions","link":"/discussion/"},{"name":"Forums","link":"/thread/"},{"name":"Forums Packages","link":"/threadspackage/"},{"name":"Posts","link":"/activitystatus/"}]},{"name":"Happify Newsletters","children":[{"name":"Campaigns","link":"/newslettercampaign/"},{"name":"Cash Rewards","link":"/newslettercashreward/"},{"name":"Daily Newsletter","link":"/happifiersdailynewsletter/"},{"name":"Email Queue","link":"/newsletterqueue/"},{"name":"Featured Track","link":"/newsletteractivity/"},{"name":"Happify Newsletter (ex. Newsletter)","link":"/newsletter/"},{"name":"Newsletter Messages","link":"/newslettermessage/"},{"name":"Newsletter Posts","link":"/newsletterposts/"},{"name":"Plan Do Activities","link":"/newsletterplandoactivity/"},{"name":"Plus Banner","link":"/newsletterplus/"},{"name":"Rewards","link":"/newsletterreward/"},{"name":"Social Promo","link":"/newslettersocial/"},{"name":"Subsequent Day Package","link":"/subsequentdaypackage/"},{"name":"Subsequent Day Sent","link":"/subsequentdaysent/"},{"name":"Subsequent Package Scheduler","link":"/subsequentpackageschelduler/"},{"name":"Upside Newsletter","link":"/newsletterhd/"},{"name":"User Schedules","link":"/discountschedule/"},{"name":"User Testimonial","link":"/newslettertestimonial/"}]},{"name":"Notifications","children":[{"name":"SMS Template","link":"/smstext/"},{"name":"Template Push Notifications","link":"/templatepushnotification/"},{"name":"User Android Push Notification Batches","link":"/userandroidpushnotificationbatch/"},{"name":"User Android Push Notifications","link":"/userandroidpushnotification/"},{"name":"User iOS Push Notification Batches","link":"/useriospushnotificationbatch/"},{"name":"User iOS Push Notifications","link":"/useriospushnotification/"}]},{"name":"Polls/Quizzes","children":[{"name":"Answers","link":"/answer/"},{"name":"Poll Setup","link":"/pollsetupview/"},{"name":"Polls","link":"/poll/"},{"name":"Questions","link":"/question/"},{"name":"Quiz Setup","link":"/quizsetupview/"},{"name":"Quizzes","link":"/quiz/"}]},{"name":"Tracks","children":[{"name":"Creators","link":"/creator/"},{"name":"Default Featured Tracks","link":"/defaultfeaturedtrack/"},{"name":"Discipline","link":"/discipline/"},{"name":"DisciplineThreshold","link":"/disciplinethreshold/"},{"name":"Explore Tracks","link":"/exploretrack/"},{"name":"Happify Tracks (ex. Tracks)","link":"/track/"},{"name":"Life Condition","link":"/lifecondition/"},{"name":"Life Domain","link":"/lifedomain/"},{"name":"List Featured Track","link":"/listfeaturedtrack/"},{"name":"My User","link":"/my-user/"},{"name":"Testimonials","link":"/testimonial/"},{"name":"Track Activities","link":"/challengeactivity/"},{"name":"Track Activities Modules","link":"/challengeactivitiesmodule/"},{"name":"Track Custom Images","link":"/trackcustomimages/"},{"name":"Track Levels","link":"/challenge/"},{"name":"Track Parts","link":"/challengestatus/"},{"name":"Track Recommendation Quiz Results","link":"/trackrecommendationquiz/"},{"name":"Track Recommender Exclusions","link":"/trackrecommenderexclusion/"},{"name":"Track Summary","link":"/tracksummaryview/"}]},{"name":"Transactional Emails","children":[{"name":"Scheduler","link":"/schedulerview/"}]},{"name":"Others","children":[{"name":"Authors","link":"/authors/"},{"name":"Disclaimers","link":"/partnerspacedisclaimer/"},{"name":"Editorial Content (ex. Happifiers)","link":"/happifiers/"},{"name":"Experts","link":"/experts/"},{"name":"Global Audios","link":"/laudio/"},{"name":"Global Images","link":"/limage/"},{"name":"Global Locales","link":"/globallocale/"},{"name":"Global Videos","link":"/lvideo/"},{"name":"How It Works Slide","link":"/howitworksslide/"},{"name":"Intro Screen Dialog","link":"/partnerspaceintroscreen/"},{"name":"Locales Packages","link":"/localespackage/"},{"name":"Publishers","link":"/publishers/"},{"name":"Tags (Happify/Kopa Topics)","link":"/tags/"}]}]}]}
                result = {
                    "roles":["admin","staff","space_admin","super_admin","cms_db_admin"],
                    "items":[{"name":"Authors","link":"/authors/"},{"name":"Experts","link":"/experts/"},{"name":"Tags","link":"/tags/"}]
                }
                break;
            }
        }
        console.log(`========== Api request ==========`);
        console.log("response:", result);
        console.log(`=================================`);
        return result;
    }

    static async #requestDelayEmulation() {
        const timeout = 40 + (Math.random() * 160);
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    static async gql(url, body) {
        const response = await fetch(Api.#GQL_URL + url,
            Object.assign(Api.#FETCH_INIT, {
                body: JSON.stringify(body)
            })
        );
        return await response.json();
    }
}