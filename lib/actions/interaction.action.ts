"use server"

import Question from "@/database/question.model"
import { connectToDatabase } from "../mongoose"
import { ViewQuestionParams } from "./shared.types"
import Interaction from "@/database/interaction.model"

export async function viewQuestion(params: ViewQuestionParams) {
    try {
        connectToDatabase()

        const { questionId, userId } = params

        await Question.findByIdAndUpdate(questionId, { $inc: { view: 1 } })

        if(userId) {
            const existingInteraction = await Interaction.findOne({
                user:userId,
                action: "view",
                quesiton: questionId
            })

            if(existingInteraction) return;

            await Interaction.create({
                user: userId,
                action: "view",
                question: questionId
            })
        }

    } catch (error) {
        console.log(error)
        throw error;
    }
}