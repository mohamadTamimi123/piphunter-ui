

import React from "react";

import Review, { ReviewType } from '@/components/reviews/Review';
import { cn } from '@nextui-org/theme';



export type CardReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType;

const CardReview = React.forwardRef<HTMLDivElement, CardReviewProps>(
  ({className, ...review}, ref) => (
    <div ref={ref} className={cn("rounded-medium bg-content1 p-5 shadow-small", className)}>
      <Review {...review} />
    </div>
  ),
);

CardReview.displayName = "CardReview";

export default CardReview;

