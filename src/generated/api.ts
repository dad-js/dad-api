import type { ISocket } from "../libs/socket";
import { BaseAPI } from "../libs/baseapi";
import { ItemModule, CharacterModule, AccountModule, AgentModule, CharacterClassModule, ChatModule, CommonModule, CustomizeModule, DediServerModule, FriendModule, GatheringHallModule, GmModule, InGameModule, InventoryModule, IronMaceModule, LobbyModule, MarketPlaceModule, MerchantModule, OperateModule, PartyModule, RankingModule, ReligionModule, ShopModule, TradeModule, DefinsModule, PacketCommandModule, RewardModule } from "./modules";

export class API extends BaseAPI {
    readonly item: ItemModule;
    readonly character: CharacterModule;
    readonly account: AccountModule;
    readonly agent: AgentModule;
    readonly characterClass: CharacterClassModule;
    readonly chat: ChatModule;
    readonly common: CommonModule;
    readonly customize: CustomizeModule;
    readonly dediServer: DediServerModule;
    readonly friend: FriendModule;
    readonly gatheringHall: GatheringHallModule;
    readonly gm: GmModule;
    readonly inGame: InGameModule;
    readonly inventory: InventoryModule;
    readonly ironMace: IronMaceModule;
    readonly lobby: LobbyModule;
    readonly marketPlace: MarketPlaceModule;
    readonly merchant: MerchantModule;
    readonly operate: OperateModule;
    readonly party: PartyModule;
    readonly ranking: RankingModule;
    readonly religion: ReligionModule;
    readonly shop: ShopModule;
    readonly trade: TradeModule;
    readonly defins: DefinsModule;
    readonly packetCommand: PacketCommandModule;
    readonly reward: RewardModule;

    constructor(socket: ISocket) {
        super(socket);
        this.item = new ItemModule(socket);
        this.character = new CharacterModule(socket);
        this.account = new AccountModule(socket);
        this.agent = new AgentModule(socket);
        this.characterClass = new CharacterClassModule(socket);
        this.chat = new ChatModule(socket);
        this.common = new CommonModule(socket);
        this.customize = new CustomizeModule(socket);
        this.dediServer = new DediServerModule(socket);
        this.friend = new FriendModule(socket);
        this.gatheringHall = new GatheringHallModule(socket);
        this.gm = new GmModule(socket);
        this.inGame = new InGameModule(socket);
        this.inventory = new InventoryModule(socket);
        this.ironMace = new IronMaceModule(socket);
        this.lobby = new LobbyModule(socket);
        this.marketPlace = new MarketPlaceModule(socket);
        this.merchant = new MerchantModule(socket);
        this.operate = new OperateModule(socket);
        this.party = new PartyModule(socket);
        this.ranking = new RankingModule(socket);
        this.religion = new ReligionModule(socket);
        this.shop = new ShopModule(socket);
        this.trade = new TradeModule(socket);
        this.defins = new DefinsModule(socket);
        this.packetCommand = new PacketCommandModule(socket);
        this.reward = new RewardModule(socket);
    }
}
