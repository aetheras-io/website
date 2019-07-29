import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Paper from '@material-ui/core/Paper';
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from './shared/IntlComponent';
import CONST from '../utils/const';
import { debounce } from 'lodash';

class Whitepaper extends IntlComponent {
    state = {
        scrollHeight: window.scrollY,
        isBookmarkOpen: false
    }

    componentDidMount() {
        this.isDidMount = true;
        window.addEventListener('scroll', debounce(() => {
            this.safeSetState({ scrollHeight: window.scrollY })
        }, { maxWait: 1000 }));
    }

    componentWillUnmount() {
        this.isMount = false;
        window.removeEventListener('scroll', debounce(() => this.safeSetState({ scrollHeight: window.scrollY }), { maxWait: 1000 }));
    }

    onBookmarkClick = (name) => () => {
        const elem = document.getElementById(name);
        elem.scrollIntoView({ behavior: 'smooth' });
    }

    onBookmarkTrigger = () => {
        this.safeSetState(prevState => {return { isBookmarkOpen: !prevState.isBookmarkOpen }})
    }

    closeBookmark = () => {
        this.safeSetState({ isBookmarkOpen: false });
    }

    getBookMarkActive = () => {
        if (this.isDidMount) {
            return {
                whatIsAgora: true,
                motivation: document.getElementById('motivation').getBoundingClientRect().top <= 20,
                developers: document.getElementById('developers').getBoundingClientRect().top <= 20,
                gamers: document.getElementById('gamers').getBoundingClientRect().top <= 20,
                connecting: document.getElementById('connecting').getBoundingClientRect().top <= 20,
                alliance: document.getElementById('alliance').getBoundingClientRect().top <= 20,
                ownership: document.getElementById('ownership').getBoundingClientRect().top <= 20,
                freedom: document.getElementById('freedom').getBoundingClientRect().top <= 20,
                technology: document.getElementById('technology').getBoundingClientRect().top <= 20,
                community: document.getElementById('community').getBoundingClientRect().top <= 20,
                revenue: document.getElementById('revenue').getBoundingClientRect().top <= 20,
                roadmap: document.getElementById('roadmap').getBoundingClientRect().top <= 20,
                about: document.getElementById('about').getBoundingClientRect().bottom <= 460,
            }
        } else {
            return {
                whatIsAgora: true,
                motivation: false,
                developers: false,
                gamers: false,
                connecting: false,
                alliance: false,
                ownership: false,
                freedom: false,
                technology: false,
                community: false,
                revenue: false,
                roadmap: false,
                about: false,
            }
        }
    }

    render() {
        const { classes } = this.props;
        const { isBookmarkOpen } = this.state;
        let scrollPercentage = 0;
        const isBookmarkActive = this.getBookMarkActive();
        if (this.isDidMount) {
            const bookmarkCount = Object.values(isBookmarkActive).length;
            const activeCount = Object.values(isBookmarkActive).filter(a => a).length;
            scrollPercentage = Math.floor((activeCount / bookmarkCount).toFixed(2) * 100);
        }
        return (
            <div className={`${usingClasses(classes, 'wrapper')} whitepaper`}>
                <div className={`${usingClasses(classes, 'bookmarkOverlay')} ${isBookmarkOpen ? ' active' : ''}`} onClick={this.onBookmarkTrigger}>
                    <div className={`${usingClasses(classes, 'bookmarkContainer')} ${isBookmarkOpen ? ' active' : ''}`}>
                        <div className={usingClasses(classes, 'bookmark')}>
                            <div className={usingClasses(classes, 'bookmarkScrollbar')}>
                                <div className={usingClasses(classes, 'scrollbar')} style={{ height: `${scrollPercentage}%` }} />
                            </div>
                            <Paper className={usingClasses(classes, 'bookmarkPaper')}>
                                <Button className={`${usingClasses(classes, 'bookmarkLink')} ${isBookmarkActive.whatIsAgora ? ' active' : ''}`} onClick={this.onBookmarkClick('what-is-agora')} disableRipple={true}>What is Agora</Button>
                                <Button className={`${usingClasses(classes, 'bookmarkLink')} ${isBookmarkActive.motivation ? ' active' : ''}`} onClick={this.onBookmarkClick('motivation')} disableRipple={true}>Motivation From Pain Points</Button>
                                <Button className={`${usingClasses(classes, 'subBookmarkLink')} ${isBookmarkActive.developers ? ' active' : ''}`} onClick={this.onBookmarkClick('developers')} disableRipple={true}>Developers</Button>
                                <Button className={`${usingClasses(classes, 'subBookmarkLink')} ${isBookmarkActive.gamers ? ' active' : ''}`} onClick={this.onBookmarkClick('gamers')} disableRipple={true}>Gamers</Button>
                                <Button className={`${usingClasses(classes, 'bookmarkLink')} ${isBookmarkActive.connecting ? ' active' : ''}`} onClick={this.onBookmarkClick('connecting')} disableRipple={true}>Connecting gaming worlds with blockchain</Button>
                                <Button className={`${usingClasses(classes, 'subBookmarkLink')} ${isBookmarkActive.alliance ? ' active' : ''}`} onClick={this.onBookmarkClick('alliance')} disableRipple={true}>Alliance of Developers</Button>
                                <Button className={`${usingClasses(classes, 'subBookmarkLink')} ${isBookmarkActive.ownership ? ' active' : ''}`} onClick={this.onBookmarkClick('ownership')} disableRipple={true}>Asset Ownership</Button>
                                <Button className={`${usingClasses(classes, 'subBookmarkLink')} ${isBookmarkActive.freedom ? ' active' : ''}`} onClick={this.onBookmarkClick('freedom')} disableRipple={true}>Gaming Freedom</Button>
                                <Button className={`${usingClasses(classes, 'subBookmarkLink')} ${isBookmarkActive.technology ? ' active' : ''}`} onClick={this.onBookmarkClick('technology')} disableRipple={true}>Technology</Button>
                                <Button className={`${usingClasses(classes, 'subBookmarkLink')} ${isBookmarkActive.community ? ' active' : ''}`} onClick={this.onBookmarkClick('community')} disableRipple={true}>Community</Button>
                                <Button className={`${usingClasses(classes, 'subBookmarkLink')} ${isBookmarkActive.revenue ? ' active' : ''}`} onClick={this.onBookmarkClick('revenue')} disableRipple={true}>Revenue Model</Button>
                                <Button className={`${usingClasses(classes, 'bookmarkLink')} ${isBookmarkActive.roadmap ? ' active' : ''}`} onClick={this.onBookmarkClick('roadmap')} disableRipple={true}>Roadmap</Button>
                                <Button className={`${usingClasses(classes, 'bookmarkLink')} ${isBookmarkActive.about ? ' active' : ''}`} onClick={this.onBookmarkClick('about')} disableRipple={true}>About Aetheras</Button>
                            </Paper>
                        </div>
                    </div>
                    <span className={`${usingClasses(classes, 'bookmarkTrigger')} ${isBookmarkOpen ? ' active' : ''}`}>
                        <ArrowRight />
                    </span>
                </div>
                <section className={`${usingClasses(classes, 'section')} what-is-agora`} onClick={this.closeBookmark}>
                    <div id="what-is-agora" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'titleText')}>
                            <FormattedMessage
                                id="what_is_agora_title"
                                defaultMessage={'What is Agora'}
                            />
                        </span>
                        <img src="/images/products_ill.svg" alt="products_ill" className={usingClasses(classes, 'illImg')} />
                        <p className={usingClasses(classes, 'subTitleText')}>
                            <FormattedMessage
                                id="what_is_agora_message"
                                defaultMessage={'Agora is a game asset centric platform that aims to provide a way to connect the virtual worlds of games.'}
                            />
                        </p>
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} motivation`} onClick={this.closeBookmark}>
                    <div id="motivation" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'titleText')}>
                            <FormattedMessage
                                id="motivation_title"
                                defaultMessage={'Motivation From Pain Points'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'subTitleText')}>
                            <FormattedMessage
                                id="motivation_sub_title"
                                defaultMessage={'Our main motivation is to solve pain points in the gaming industry, as well as creating practical uses for blockchain technology.'}
                            />
                        </span>
                        <img src="/images/motivation.png" alt="motivation" className={usingClasses(classes, 'illImg')} />
                        <p className={usingClasses(classes, 'bodyText')}>
                            <FormattedMessage
                                id="motivation_message_1"
                                defaultMessage={'To say the gaming industry is hyper competitive would be an understatement. With 9050 new games released on Steam alone in 2018, each desperately fight for screen time.'}
                            />
                        </p>
                        <p className={usingClasses(classes, 'bodyText')}>
                            <FormattedMessage
                                id="motivation_message_2"
                                defaultMessage={'For Indie Game Developers, simply getting a game noticed therefore becomes an even more monumental task than in the past. Naturally due to limited resources, Indie Developers face an increasingly difficult task to raise awareness about their games.'}
                            />
                        </p>
                        <div className={usingClasses(classes, 'memo')}>
                            <FormattedMessage
                                id="motivation_memo"
                                defaultMessage={`1 "• Number of games released on Steam 2018 | Statistic - Statista." Accessed May 29, 2019.`}
                            />
                            <span>https://www.statista.com/statistics/552623/number-games-released-steam/</span>
                        </div>
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} developers`} onClick={this.closeBookmark}>
                    <div id="developers" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="developers_title"
                                defaultMessage={'Developers'}
                            />
                        </span>
                        <p className={usingClasses(classes, 'subParagraph')}>
                            <FormattedMessage
                                id="developers_sub_title"
                                defaultMessage={'Here are some pain points that Game Developers face:'}
                            />
                        </p>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/resources.svg" alt="resources" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="developers_resources_title"
                                        defaultMessage={'Resources'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="developers_resources_message"
                                        defaultMessage={'Despite having great ideas, many teams are unable to fully execute their visions due to physical limitations such as team size or technical expertise.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/competition.svg" alt="competition" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="developers_competition_title"
                                        defaultMessage={'Competition'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="developers_competition_message"
                                        defaultMessage={'With an increasing number of games released per year, catching the attention of players is increasingly difficult.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/isolability.svg" alt="isolability" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="developers_isolability_title"
                                        defaultMessage={'Isolability'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="developers_isolability_message"
                                        defaultMessage={'Most games exist in isolation and do not have interactions with other games, even from the same developer.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/alliances.svg" alt="alliances" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="developers_alliances_title"
                                        defaultMessage={'Alliances'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="developers_alliances_message"
                                        defaultMessage={'With the increasing amount of competition and how most games work in isolation, there’s a strong need for smaller developers to form alliances more than ever. However, due to the lack of resources, this is usually closer to being a fantasy than a practical strategy.'}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} gamers`} onClick={this.closeBookmark}>
                    <div id="gamers" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="gamers_title"
                                defaultMessage={'Gamers'}
                            />
                        </span>
                        <p className={usingClasses(classes, 'subParagraph')}>
                            <FormattedMessage
                                id="gamers_sub_title"
                                defaultMessage={'Gamers face a similar set of pain points, but from the other perspective.'}
                            />
                        </p>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/ownership.svg" alt="ownership" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="gamers_ownership_title"
                                        defaultMessage={'Ownership'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="gamers_ownership_message"
                                        defaultMessage={'Many games in recent years sell virtual items, whether directly or via loot box mechanics. Unlike how traditionally owning a game meant having a physically copy, this ownership model means players are at the mercy of the developer’s servers. Players own the items only if the servers are alive and the developer doesn’t run out of business.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/addiction.svg" alt="addiction" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="gamers_addiction_title"
                                        defaultMessage={'Addiction'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="gamers_addiction_message"
                                        defaultMessage={'A game that’s considered addicting is usually a good thing, meaning that it’s fun and players want to come back to play. However, after a certain point, this becomes unhealthy.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/barrier.svg" alt="barrier" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="gamers_barrier_title"
                                        defaultMessage={'Barrier to try new games'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="gamers_barrier_message"
                                        defaultMessage={'Finding time to even try new games is also increasingly more difficult. Games employ numerous tactics such as daily quests and time limited events to entice players to spend at least a certain amount of time everyday. Trying a new game could mean losing precious time and items from the game that the player has been playing.'}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} connecting`} onClick={this.closeBookmark}>
                    <div id="connecting" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'titleText')}>
                            <FormattedMessage
                                id="connecting_title"
                                defaultMessage={'Connecting gaming worlds with blockchain'}
                            />
                        </span>
                        <p className={usingClasses(classes, 'paragraph')}>
                            <FormattedMessage
                                id="connecting_meesage_1"
                                defaultMessage={'Agora is a network that enables the connecting of games, opening doors to developer alliances and strategic partnerships.'}
                            />
                        </p>
                        <p className={usingClasses(classes, 'paragraph')}>
                            <FormattedMessage
                                id="connecting_meesage_2"
                                defaultMessage={'In short, Agora aims to solve issues surrounding:'}
                            />
                        </p>
                        <div className={usingClasses(classes, 'connectingList')}>
                            <div className={usingClasses(classes, 'connectingItem')}>
                                <img src="/images/alliances100.svg" alt="alliances" />
                                <span className={usingClasses(classes, 'connectingTitle')}>
                                    <FormattedMessage
                                        id="connecting_item_1"
                                        defaultMessage={'Game alliances'}
                                    />
                                </span>
                            </div>
                            <div className={usingClasses(classes, 'connectingItem')}>
                                <img src="/images/ownership100.svg" alt="ownership" />
                                <span className={usingClasses(classes, 'connectingTitle')}>
                                    <FormattedMessage
                                        id="connecting_item_2"
                                        defaultMessage={'Ownership'}
                                    />
                                </span>
                            </div>
                            <div className={usingClasses(classes, 'connectingItem')}>
                                <img src="/images/freedom.svg" alt="freedom" />
                                <span className={usingClasses(classes, 'connectingTitle')}>
                                    <FormattedMessage
                                        id="connecting_item_3"
                                        defaultMessage={'Gaming freedom'}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} alliance`} onClick={this.closeBookmark}>
                    <div id="alliance" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="alliance_title"
                                defaultMessage={'Alliance of Developers'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="alliance_message_1"
                                defaultMessage={'The idea is to bring together groups of remarkable developers, see if they could become something greater, to work together and compete with the bigger developers.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="alliance_message_2"
                                defaultMessage={'While it may be unreasonable to expect smaller developers to reliably produce games that can directly compete with AAA games, having a series of interconnected games where data can be shared will open the door for new ways to play games.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="alliance_message_3"
                                defaultMessage={'Agora enables the sharing of virtual assets among games, whether it may be items, equipment, or other content. With a way to provide data to one another, partnered games simply need to decide how to interpret each others’ data.'}
                            />
                        </span>
                        <img src="/images/alliance_ill.png" alt="alliance_ill" className={usingClasses(classes, 'illImg')} />
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} ownership`} onClick={this.closeBookmark}>
                    <div id="ownership" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="ownership_title"
                                defaultMessage={'Asset Ownership'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="ownership_message_1"
                                defaultMessage={'Ownership in most online games can be considered as virtual as the virtual assets themselves. Players own the assets as long as the games’ servers are alive. Which means once the developers decide that it’s not worth keeping the servers alive and shut them down, the players lose all the assets that they’ve spent money to acquire.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="ownership_message_2"
                                defaultMessage={'With Agora, the data is stored on a blockchain instead, which means players would continue to possess the data even after the servers stop running. Players would be able to continue to use that data in other supported games, and also if a developer decides to revive the original game.'}
                            />
                        </span>
                        <img src="/images/ownership_ill.png" alt="ownership_ill" className={usingClasses(classes, 'illImg')} />
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} freedom`} onClick={this.closeBookmark}>
                    <div id="freedom" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="freedom_title"
                                defaultMessage={'Gaming Freedom'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="freedom_message_1"
                                defaultMessage={'It’s natural for developers to design games in a way that encourages players to keep playing and come back with mechanics such as daily quests and limit time events.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="freedom_message_2"
                                defaultMessage={'On the flip side, this means players run the risk of losing rewards when they take a break and switch games. Without the chance to try new things, players can start feeling trapped, and the game can end up feeling more like work than fun.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="freedom_message_3"
                                defaultMessage={'Agora provides the potential for players to continue to earn rewards for a certain game even when playing a different partnered game, allowing players to freely try new games. This helps keep the experience fresh and enjoyment for players, as well as encouraging players to spend.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="freedom_message_4"
                                defaultMessage={'Typically, convincing a player to spend money on an online game meant convincing them that this game is and will stay fun, and will survive for the foreseeable future.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="freedom_message_5"
                                defaultMessage={'With Agora, these risks would be mitigated as long as there are other partner games using the data.'}
                            />
                        </span>
                        <img src="/images/freedom_ill.png" alt="freedom_ill" className={usingClasses(classes, 'illImg')} />
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} technology`} onClick={this.closeBookmark}>
                    <div id="technology" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="technology_title"
                                defaultMessage={'Technology'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="technology_message_1"
                                defaultMessage={'Agora will be a proprietary blockchain using Proof-of-Stake consensus that connects to the Cosmos Network. As a custom chain, the logic to create, trade, and sell virtual assets will be embedded into the chain itself.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyText')}>
                            <FormattedMessage
                                id="technology_message_2"
                                defaultMessage={'We will be providing interfaces for both developers and gamers to ensure a smooth experience:'}
                            />
                        </span>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/sdk.svg" alt="sdk" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="technology_sdk_title"
                                        defaultMessage={'SDK'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="technology_sdk_message"
                                        defaultMessage={'We will be providing an SDK for game developers to easily connect their game to Agora. Using the SDK, games can mint, sell, and retrieve virtual assets for players. Developers will be able to control which and how assets can be used in their games.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/wallet.svg" alt="wallet" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="technology_wallet_title"
                                        defaultMessage={'Wallet'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="technology_wallet_message"
                                        defaultMessage={'Users will be able to view their possessions, send and receive assets via the wallet, which will have both browser and mobile based versions.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/auction.svg" alt="auction" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="technology_auction_title"
                                        defaultMessage={'Auction Platform'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="technology_auction_message"
                                        defaultMessage={'An auction website, similar to eBay, will provide a convenient way for players to advertise and sell their assets for a fair value.'}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} community`} onClick={this.closeBookmark}>
                    <div id="community" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="community_title"
                                defaultMessage={'Community'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyText')}>
                            <FormattedMessage
                                id="community_message"
                                defaultMessage={'There will be multiple ways to participate in Agora. Below are some roles, and are not mutually exclusive.'}
                            />
                        </span>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/validators.svg" alt="validators" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="community_validators_title"
                                        defaultMessage={'Validators'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="community_validators_message"
                                        defaultMessage={'Validators help secure the network through staking and participating in consensus with other validators.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/developers.svg" alt="developers" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="community_developers_title"
                                        defaultMessage={'Developers'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="community_developers_message"
                                        defaultMessage={'Developers help create content through the minting and selling of virtual assets.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/gamers.svg" alt="gamers" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="community_gamers_title"
                                        defaultMessage={'Gamers'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="community_gamers_message"
                                        defaultMessage={'Gamers can buy and trade assets on Agora.'}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'block')}>
                            <div className={usingClasses(classes, 'blockHead')}>
                                <img src="/images/coders.svg" alt="coders" />
                            </div>
                            <div className={usingClasses(classes, 'blockBody')}>
                                <span className={usingClasses(classes, 'blockTitle')}>
                                    <FormattedMessage
                                        id="community_coders_title"
                                        defaultMessage={'Coders'}
                                    />
                                </span>
                                <span className={usingClasses(classes, 'bodyText')}>
                                    <FormattedMessage
                                        id="community_coders_message"
                                        defaultMessage={'We intend to make Agora’s code base open source, allowing everyone to contribute.'}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} revenue`} onClick={this.closeBookmark}>
                    <div id="revenue" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="revenue_title"
                                defaultMessage={'Revenue Model'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="revenue_message_1"
                                defaultMessage={'We estimate that we will likely be making most of our revenue via the auction website, which we will receive a small percentage from every auction on the site.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="revenue_message_2"
                                defaultMessage={'While we also do intend to mint our own assets on the sites and sell them, they will likely serve more of a role to jumpstart the ecosystem. Likewise, the chain will collect a small fee from transactions on the chain, but those are values mainly for discouraging spam and abuse.'}
                            />
                        </span>
                        <img src="/images/revenue_ill.png" alt="revenue_ill" className={usingClasses(classes, 'illImg')} />
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} roadmap`} onClick={this.closeBookmark}>
                    <div id="roadmap" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <span className={usingClasses(classes, 'smallTitleText')}>
                            <FormattedMessage
                                id="roadmap_title"
                                defaultMessage={'Roadmap'}
                            />
                        </span>
                        <div className={usingClasses(classes, 'roadmapList')}>
                            <div className={usingClasses(classes, 'roadmapBlock')}>
                                <div className={usingClasses(classes, 'roadmapBlockHead')}>
                                    <img src="/images/pos.svg" alt="proof of stake" />
                                </div>
                                <div className={usingClasses(classes, 'roadmapBlockBody')}>
                                    <span className={usingClasses(classes, 'roadmapBlockTitle')}>
                                        <FormattedMessage
                                            id="roadmap_pos_title"
                                            defaultMessage={'Proof of Stake chain implementation'}
                                        />
                                    </span>
                                    <span className={usingClasses(classes, 'roadmapBlockMessage')}>
                                        <FormattedMessage
                                            id="roadmap_pos_message"
                                            defaultMessage={'This is the actual implementation of the chain itself.'}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className={usingClasses(classes, 'roadmapBlock')}>
                                <div className={usingClasses(classes, 'roadmapBlockHead')}>
                                    <img src="/images/testnet.svg" alt="Testnet" />
                                </div>
                                <div className={usingClasses(classes, 'roadmapBlockBody')}>
                                    <span className={usingClasses(classes, 'roadmapBlockTitle')}>
                                        <FormattedMessage
                                            id="roadmap_testnet_title"
                                            defaultMessage={'Testnet Launch'}
                                        />
                                    </span>
                                    <span className={usingClasses(classes, 'roadmapBlockMessage')}>
                                        <FormattedMessage
                                            id="roadmap_testnet_message"
                                            defaultMessage={'While we do intend to launch testnet with a version of a mobile wallet and auction website, they will be far from complete. They will act as a springboard for potential partners to imagine what the release product may look like, and for us to receive feedback and feature requests.'}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className={usingClasses(classes, 'roadmapBlock')}>
                                <div className={usingClasses(classes, 'roadmapBlockHead')}>
                                    <img src="/images/gameSdk.svg" alt="Game SDK" />
                                </div>
                                <div className={usingClasses(classes, 'roadmapBlockBody')}>
                                    <span className={usingClasses(classes, 'roadmapBlockTitle')}>
                                        <FormattedMessage
                                            id="roadmap_gameSdk_title"
                                            defaultMessage={'Game Developer SDK'}
                                        />
                                    </span>
                                    <span className={usingClasses(classes, 'roadmapBlockMessage')}>
                                        <FormattedMessage
                                            id="roadmap_gameSdk_message"
                                            defaultMessage={'An SDK for developers to connect their games, enabling them to generate and retrieve assets that their game supports.'}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className={usingClasses(classes, 'roadmapBlock')}>
                                <div className={usingClasses(classes, 'roadmapBlockHead')}>
                                    <img src="/images/explorer.svg" alt="chain explorer" />
                                </div>
                                <div className={usingClasses(classes, 'roadmapBlockBody')}>
                                    <span className={usingClasses(classes, 'roadmapBlockTitle')}>
                                        <FormattedMessage
                                            id="roadmap_explorer_title"
                                            defaultMessage={'Chain Explorer'}
                                        />
                                    </span>
                                    <span className={usingClasses(classes, 'roadmapBlockMessage')}>
                                        <FormattedMessage
                                            id="roadmap_explorer_message"
                                            defaultMessage={'An interface for whoever may be interested in monitoring the health of the chain.'}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className={usingClasses(classes, 'roadmapBlock')}>
                                <div className={usingClasses(classes, 'roadmapBlockHead')}>
                                    <img src="/images/wallet100.svg" alt="wallet" />
                                </div>
                                <div className={usingClasses(classes, 'roadmapBlockBody')}>
                                    <span className={usingClasses(classes, 'roadmapBlockTitle')}>
                                        <FormattedMessage
                                            id="roadmap_wallet_title"
                                            defaultMessage={'Mobile Wallet'}
                                        />
                                    </span>
                                    <span className={usingClasses(classes, 'roadmapBlockMessage')}>
                                        <FormattedMessage
                                            id="roadmap_wallet_message"
                                            defaultMessage={'The wallet provides an interface for users to view and send assets, and sign transactions for Agora.'}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className={usingClasses(classes, 'roadmapBlock')}>
                                <div className={usingClasses(classes, 'roadmapBlockHead')}>
                                    <img src="/images/economic.svg" alt="economic model" />
                                </div>
                                <div className={usingClasses(classes, 'roadmapBlockBody')}>
                                    <span className={usingClasses(classes, 'roadmapBlockTitle')}>
                                        <FormattedMessage
                                            id="roadmap_economic_title"
                                            defaultMessage={'Economic Model'}
                                        />
                                    </span>
                                    <span className={usingClasses(classes, 'roadmapBlockMessage')}>
                                        <FormattedMessage
                                            id="roadmap_economic_message"
                                            defaultMessage={'We anticipate great feedback and iterations to polish economic model.'}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${usingClasses(classes, 'section')} about`} onClick={this.closeBookmark}>
                    <div id="about" className={usingClasses(classes, 'anchor')} />
                    <div className={usingClasses(classes, 'container')}>
                        <div className={usingClasses(classes, 'aboutTitle')}>
                            <img src="/images/logo.png" alt="logo" className={usingClasses(classes, 'aboutLogo')} />
                            <span className={usingClasses(classes, 'titleText')}>
                                <FormattedMessage
                                    id="about_aetheras_title"
                                    defaultMessage={'About Aetheras'}
                                />
                            </span>
                        </div>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="about_aetheras_message_1"
                                defaultMessage={'As software developers, we aim to create software to improve lives, whether through solving problems, providing entertainment, or both. We believe that blockchain technology offers the world huge opportunities for innovation with its ability to promote transparency and fairness.'}
                            />
                        </span>
                        <span className={usingClasses(classes, 'bodyParagraph')}>
                            <FormattedMessage
                                id="about_aetheras_message_2"
                                defaultMessage={'For discussions, join us on our Discord channel:'}
                            />
                        </span>
                        <a href={CONST.discordURL} target="_blank" rel="noopener noreferrer">
                            <img src="/images/discord.svg" alt="discord_ill" className={usingClasses(classes, 'illImg')} />
                        </a>
                    </div>
                </section>
            </div>
        );
    }
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    section: Object.assign({ ...SHARED_STYLES.section }, {
        paddingTop: '60px !important',
        paddingBottom: '60px !important'
    }),
    container: Object.assign({ ...SHARED_STYLES.container }, {
        margin: '0 0 0 285px',
        maxWidth: 'calc(1180px - 285px)',
        alignItems: 'flex-start',
        zIndex: 2,
    }),
    anchor: Object.assign({ ...SHARED_STYLES.anchor }, {
        top: '-80px'
    }),
    bookmarkOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
    bookmarkContainer: {
        width: '100%',
        height: '100%',
        maxWidth: 'calc(1180px + 20%)',
        padding: '0 10%',
        margin: '0 auto',
        position: 'relative'
    },
    bookmark: {
        position: 'absolute',
        top: '140px',
        width: '232px',
        display: 'flex',
        boxShadow: '0 10px 30px 0 rgba(255, 125, 47, 0.1)',
    },
    bookmarkScrollbar: {
        width: '4px',
        background: 'rgba(255, 125, 47, 0.3)'
    },
    scrollbar: {
        background: STYLES_CONST.primaryColor,
        maxHeight: '100%',
        transition: 'all 0.3s'
    },
    bookmarkPaper: {
        padding: '20px 28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        boxShadow: 'unset',
        borderRadius: '0 8px 8px 0'
    },
    bookmarkLink: {
        padding: '0',
        fontSize: '12px',
        color: STYLES_CONST.fontColor,
        opacity: '0.3',
        transition: 'all 0.3s',
        textTransform: 'unset',
        textAlign: 'left',
        '&:hover': {
            background: 'unset'
        },
        '&.active': {
            opacity: '1'
        },
        '&:not(:last-child)': {
            marginBottom: '12px'
        }
    },
    subBookmarkLink: {
        padding: '0 0 0 36px',
        fontSize: '12px',
        color: STYLES_CONST.fontColor,
        opacity: '0.3',
        transition: 'all 0.3s',
        textTransform: 'unset',
        textAlign: 'left',
        '&:hover': {
            background: 'unset'
        },
        '&.active': {
            opacity: '1'
        },
        '&:not(:last-child)': {
            marginBottom: '12px'
        }
    },
    bookmarkTrigger: {
        display: 'none',
        width: '24px',
        minWidth: '24px',
        height: '48px',
        padding: 0,
        zIndex: 998,
        background: 'rgba(255, 125, 47, 0.16)',
        borderRadius: '0 8px 8px 0',
        color: STYLES_CONST.primaryColor
    },
    titleText: Object.assign({ ...SHARED_STYLES.titleText }, {
        fontSize: '32px',
        marginBottom: '30px'
    }),
    smallTitleText: Object.assign({ ...SHARED_STYLES.titleText }, {
        fontSize: '24px',
        lineHeight: '36px',
        marginBottom: '30px'
    }),
    paragraph: Object.assign({ ...SHARED_STYLES.paragraph }, {
        textAlign: 'left',
        fontSize: '20px',
        lineHeight: '30px'
    }),
    subParagraph: Object.assign({ ...SHARED_STYLES.paragraph }, {
        textAlign: 'left',
        fontSize: '20px',
        lineHeight: '30px',
        marginBottom: '0'
    }),
    memo: Object.assign({ ...SHARED_STYLES.paragraph }, {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        fontSize: '13px',
        lineHeight: '20px',
        paddingLeft: '12px',
        borderLeft: '1px solid rgba(76, 73, 72, 0.8)',
        color: 'rgba(76, 73, 72, 0.7)',
        maxWidth: '100%',
        overflowWrap: 'break-word'
    }),
    bodyText: Object.assign({ ...SHARED_STYLES.bodyText }, {
        lineHeight: '28px'
    }),
    block: {
        display: 'flex',
        marginTop: '38px'
    },
    blockHead: {
        height: '64px',
        width: '64px',
        margin: '0 20px 20px 0',
        '& img': {
            height: '64px',
            width: '64px'
        }
    },
    blockBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    blockTitle: {
        fontSize: '16px',
        fontWeight: '700',
        color: STYLES_CONST.primaryColor,
        marginBottom: '12px'
    },
    connectingList: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px'
    },
    connectingItem: {
        display: 'flex',
        flexDirection: 'column'
    },
    connectingTitle: {
        fontSize: '20px',
        fontWeight: '600',
        color: STYLES_CONST.primaryColor
    },
    bodyParagraph: Object.assign({ ...SHARED_STYLES.bodyText }, {
        lineHeight: '28px',
        marginBottom: '28px'
    }),
    roadmapBlock: {
        display: 'flex',
        paddingBottom: '30px',
        position: 'relative',
        '&:not(:last-of-type):before': {
            content: "''",
            position: 'absolute',
            top: '36px',
            left: '125px',
            width: '2px',
            height: 'calc(100% - 12px)',
            background: STYLES_CONST.primaryColor
        },
        '&:after': {
            content: "''",
            position: 'absolute',
            top: '24px',
            left: '120px',
            width: '12px',
            height: '12px',
            border: `2px solid ${STYLES_CONST.primaryColor}`,
            borderRadius: '50%'
        }
    },
    roadmapBlockHead: {
        display: 'flex',
        width: '100px',
        height: '100px'
    },
    roadmapBlockBody: {
        marginTop: '20px',
        marginLeft: '50px',
        display: 'flex',
        flexDirection: 'column'
    },
    roadmapBlockTitle: {
        fontSize: '16px',
        fontWeight: '700',
        color: STYLES_CONST.primaryColor,
        marginBottom: '12px'
    },
    roadmapBlockMessage: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '23px'
    },
    aboutTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    aboutLogo: {
        width: '64px',
        height: '64px',
        marginRight: '12px',
        marginBottom: '30px'
    }
})

export default withStyles(styles)(injectIntl(Whitepaper));
