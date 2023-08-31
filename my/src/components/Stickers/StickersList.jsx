import { Sticker } from "./Sticker";
import { StickerList } from './Stickers.styled';
import { StickerCard } from "./Stickers.styled";

export function StickersList({stickers, onGetLabel}) {
    return (
        <StickerList>
            {stickers.map(({img, label}) => {
                return  <StickerCard>
                            <Sticker
                            img={img}
                            label={label}
                            onGetLabel={onGetLabel}
                            />
                        </StickerCard>
            })}
        </StickerList>
    )
}