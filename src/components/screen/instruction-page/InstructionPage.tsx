import React, { FC } from 'react';

import Button from '@/components/common/ui/button';
import { ButtonColor, ButtonType } from '@/components/common/ui/button/types';
import Card from '@/components/common/ui/card';
import Line from '@/components/common/ui/line';

const InstructionPage: FC = () => {
  return (
    <div className="p-15 bg-white dark:bg-dark">
      <div className="relative">
        <Card
          src="/images/cards/instruction.jpg"
          width={330}
          height={185}
          alt="A girl who reading the instruction"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white w-72 leading-none text-center">
          The instruction
        </h1>
      </div>
      <div className="pt-15">
        <div className="mt-2.5">
          <h6 className="text-2xl text-white ">Objective</h6>
          <div className="text-base text-white  mt-2.5 mb-2.5">
            If you are part of the mafia, the object of the game is to eliminate
            all the other players. If you are not part of the mafia, the object
            of the game is to eliminate all the mafia players.
          </div>
          <Line />
        </div>
        <div className="mt-2.5">
          <h6 className="text-2xl text-white ">Game Play</h6>
          <div className="text-base text-white  mt-2.5 mb-2.5">
            Each round begins with the moderator telling all players to close
            their eyes. Then, the moderator has all the mafia players open their
            eyes. Together the mafia players decide one other player to be
            eliminated. This should be done silently by a finger point or the
            nod of the head. The moderator will then have the mafia close their
            eyes again, and have the doctor open his/her eyes. The doctor will
            silently signal for one player to be saved for the round. The
            moderator will have the doctor close his/her eyes, and then have the
            sheriffs open their eyes. Together they will silently pick one
            player, and the moderator will silently signal if the player
            selected is part of the mafia or not. This can be done with a thumbs
            up or thumbs down. The moderator will then have the sheriffs close
            their eyes, and then have every player open their eyes. The
            moderator will recap the events through a story that could go like,
            “The mafia was out for blood last night and eliminated Karen after
            suspecting her of informing on their illegal activities. The doctor
            was unable to save her in time.” Karen would now be eliminated from
            the game. All players then debate on who they think is part of the
            mafia. Two players are selected to go on trial, and each player
            votes on one of these players to be eliminated. The player with more
            votes is eliminated from the game. The moderator starts the next
            round telling all remaining players to close their eyes. The round
            then continues the same as the first round.
          </div>
          <Line />
        </div>
        <div className="mt-2.5">
          <h6 className="text-2xl text-white ">Winning</h6>
          <div className="text-base text-white  mt-2.5 mb-2.5">
            The mafia wins if all other players are eliminated. The other
            players win if all the mafia is eliminated.
          </div>
          <Line />
        </div>
        <div className="mt-2.5">
          <h6 className="text-2xl text-white ">Rules</h6>
          <ul className="text-base text-white  mt-2.5 mb-2.5 list-disc pl-4">
            <li>
              When a player is eliminated, the card is not shown to the other
              players. If all the sheriffs or the doctor is out of the game, the
              moderator will still go through the motions of having them open
              and close their eyes during a round.
            </li>
            <li>
              Once you are eliminated from the game, you can no longer
              participate in the debate or vote on eliminating a player.
            </li>
            <li>
              If the doctor saves the player that was eliminated by the mafia,
              the player remains in the game. The doctor can save his/her own
              life.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button
          type={ButtonType.SQUARE}
          color={ButtonColor.BLUE}
          text="Return to home"
        />
      </div>
    </div>
  );
};

export default InstructionPage;
